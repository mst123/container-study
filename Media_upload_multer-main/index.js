const express = require('express')
require('dotenv').config()
require('colors')
const connection = require('./config/db.js')
const Upload = require('./routes/upload.js')
const Grid = require('gridfs-stream')
const mongoose = require('mongoose')

const app = express()
connection()

const dbCon = mongoose.connection
dbCon.once("open", function () {
    const gfs = Grid(dbCon.db, mongoose.mongo)
    gfs.collection('photos')
})

app.use('/file', Upload)

app.get('file/:filename', async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename })
        const readStream = gfs.createReadStream(file.filename)
        readStream.pipe(res)
    } catch (error) {
        res.send('not found')
    }
})

app.delete('file/:filename', async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success")
    } catch (error) {
        console.log(error);
        res.send('An error occured!')
    }
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port:http://localhost:${PORT}`.blue.bold))
