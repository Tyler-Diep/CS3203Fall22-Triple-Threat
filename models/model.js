const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    tenant: String,
    connection: String,
    email: String,
    password: String,
    debug: Boolean,
    email_verified: String,
    data: {
        todo: Array,
        deleted: Array,
        completed: Array
    }

    /*
    tenant: {
        required: true,
        type: String
    },
    connection: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    debug: {
        required: true,
        type: Boolean
    },
    email_verified: {
        required: true,
        type: Boolean
    },
    data: {
        todo: Array,
        deleted: Array,
        completed: Array
    }*/

}, {collection: 'users'});

module.exports = mongoose.model.users || mongoose.model('users', dataSchema)