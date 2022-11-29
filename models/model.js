const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
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
    data: [{
        todo: Array,
        deleted: Array,
        completed: Array
    }]
})

module.exports = mongoose.model('Data', dataSchema)