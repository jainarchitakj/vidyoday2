const express = require('express');
const router = express.Router();
const Yojna = require('../models/yojna.js');

const ObjectId = require('mongoose').Types.ObjectId;




//Get, Post, Put, Delete
//Base path: http://localhost:3000/yojna

//Get Api 
router.get('/', (req, res) => {
    Yojna.find((err, doc) => {
        if (err) {
            console.log('Error in Get Data' + err);
        } else {
            res.send(doc);
        }
    })

});

//Get Single Employee Api
router.get('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        Yojna.findById(req.params.id, (err, doc) => {
            if (err) {
                console.log('Error in Get employee by id' + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        return res.status(400).send('No record found with id' + req.params.id)
    }
})


//Post Api
router.post('/', (req, res) => {
    let yoj = new Yojna({
        title: req.body.title,
        price: req.body.price,
        units: req.body.units,
        schemePayUrl: req.body.schemePayUrl
    });

    yoj.save((err, doc) => {
        if (err) {
            console.log('Error in Post Data' + err)
        } else {
            res.send(doc);
        }
    })
});


//Put Api
router.put('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {

        let yoj = {
            title: req.body.title,
            price: req.body.price,
            units: req.body.units,
            schemePayUrl: req.body.schemePayUrl
        }

        Yojna.findByIdAndUpdate(req.params.id, { $set: yoj }, { new: true }, (err, doc) => {
            if (err) {
                console.log('Error in Update employee by id' + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        return res.status(400).send('No record found with id' + req.params.id)
    }

})



//Delete Api
router.delete('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        Yojna.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                console.log('Error in Delete yojna by id' + err);
            } else {
                res.send(doc);
            }
        });
    } else {
        return res.status(400).send('No record found with id' + req.params.id)
    }
})




module.exports = router;