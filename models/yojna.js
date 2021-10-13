const mongoose = require('mongoose');


const Yojna = mongoose.model('Yojna', {
    title: { type: String },
    price: { type: String },
    units: { type: String },
    schemePayUrl: { type: String }
});


module.exports = Yojna;