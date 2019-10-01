const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cards = new Schema ({
    card_subject: {
        type: String
    },
    card_description: {
        type: String
    },
})

module.exports = mongoose.model('flashcards', Cards);