const express = require('express')
const upload = require('../middleware/upload.js')

const router = express.Router()

router.post('/upload', upload.single("file"), (req, res) => {
    if (req.file === undefined) {
        return res.send('You must select a file!')
    }
    const imgUrl = `http://localhost:5000/file/${req.file.filename}`;
    return res.json(imgUrl)
})

module.exports = router