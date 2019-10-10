/**
 * * Author: Kevin Carlos
 * * Date: 9/3/19
 * * Description:
 * *    This file sets up the basic MongoDB server I have created
 */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
// const url = 'mongodb://myDB:27017/data';
const produrl = 'mongodb://db-5d9db6155176a800012b87eb.c.5d8fa59da99b6b00011665f3.cycle.io:27017/api';
const PORT = process.env.PORT || 80;

let cards = require('./src/models/Cards');

const app = express();
app.use(cors(), bodyParser.json());

/*
    * Mongoose is for object modeling
    ! 'data' is the name of my table
*/
// mongoose.connect(produrl, {
//         useNewUrlParser: true
//     })
//     .then(() => console.log('Database Connected...'))
//     .catch(err => console.log(err));

// Run nodemon server
app.listen(PORT, () => console.log('Listening on port:', PORT));


const connectWithRetry = function () {
    return mongoose.connect(produrl, function (err) {
        if (err) {
            console.error('Failed to connect to mongo on startup...retrying', err);
            setTimeout(connectWithRetry, 5000);
        }
    });
}
connectWithRetry();

// Endpoints
// cors(corsOptions)
app.get("/", function (req, res) {
    // eslint-disable-next-line array-callback-return
    // res.json([])
    cards.find(function (err, card) {
        if (err) {
            console.log(err);
        } else {
            res.json(card);
        }
    });
});

app.get("/find/:id", function (req, res) {
    console.log('Requesting a card by id');
    let id = req.params.id;
    cards.findById(id, function (err, card) {
        res.json(card);
    });
});

app.post('/add', function (req, res) {
    let card = new cards(req.body);
    card.save()
        .then(card => {
            res.status(200).json({
                'card': 'new card added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new card failed');
        })
});

app.post("/update/:id", function (req, res) {
    cards.findById(req.params.id, function (err, card) {
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

app.get("/delete/:id", function (req, res) {
    cards.findByIdAndRemove(req.params.id, function (err, card) {
        if (err)
            res.json(err);
        else
            res.json('Successfully Removed.');
    });
});