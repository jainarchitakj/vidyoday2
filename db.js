const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vidyodayDB', (err) => {
    if (!err) {
        console.log('DB Connection Successful')
    } else {
        console.log('Error in connection' + err)
    }
})

module.exports = mongoose;