const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    // reaction reference goes here
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;