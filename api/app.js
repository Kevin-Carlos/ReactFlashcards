/**
 * * Author: Kevin Carlos
 * * Date: 9/3/19
 * * Description:
 * *    This file sets up the basic MongoDB server I have created
 */

const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
var cors = require('cors');
const url = 'mongodb://localhost:27017/data';
// const url = 'mongodb://mongodb'
const PORT = 5000;
const cardRoutes = express.Router();

let cards = require ('./src/models/Cards');

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

/*
    * Mongoose is for object modeling
    ! 'data' is the name of my table
*/
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log('Database Connected...'))
    .catch(err => console.log(err));

// Run nodemon server
app.listen(PORT, () => console.log('Backend listening on port:', PORT));

// Endpoints
cardRoutes.route('/').get(function(req, res) {
    // eslint-disable-next-line array-callback-return
    cards.find(function(err, card) {
        if (err) {
            console.log(err);
        } else {
            res.json(card);
        }
    });
});

cardRoutes.route("/find/:id").get(function(req, res) {
    console.log('Requesting a card by id');
    let id = req.params.id;
    cards.findById(id, function(err, card) {
        res.json(card);
    });
});

cardRoutes.route('/add').post(function(req, res) {
    let card = new cards(req.body);
    card.save()
        .then(card => {
            res.status(200).json({'card': 'new card added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new card failed');
        })
});

cardRoutes.route('/update/:id').post(function(req, res) {
    cards.findById(req.params.id, function(err, card) {
        if (!card)
            res.status(404).send('data not found');
        else
            card.card_description = req.body.card.card_description;
            card.card_subject = req.body.card_subject;
            card.save().then(card => {
                res.json('card updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

cardRoutes.route('/delete/:id').get(function(req, res) {
    cards.findByIdAndRemove(req.params.id, function(err, card) {
        if (err)
            res.json(err);
        else
            res.json('Successfully Removed.');
    });
});

// Don't use...breaks stuff
// app.use('/data', cardRoutes);