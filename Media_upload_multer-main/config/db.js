const mongoose = require('mongoose')

module.exports = async function connection() {
    try {
        const connectionParams = {
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.DB, connectionParams)
        console.log('Connected to database!');
    } catch (err) {
        console.log(err);
        console.log('Cound not connect to database!');
    }
}