const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Contacts', contactsSchema);