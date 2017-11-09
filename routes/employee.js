var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');
var router = express.Router();
var constructor = require('../utils/service.constructor');
var moment = require('moment');

function dateValidator(value) {
    if(moment(value, 'DD-MM-YYYY').isValid()) {
        return true;
    }
    else {
        return false;
    }
}

var employeeSchema = new Schema({
	Name: {
        type: String,
        required: true,
    },
	ContactNumber: {
		type: String,
		required: true,
	},
	Age: {
        type: Number,
        required: true,
    },
	DOB: {
		type: String,
        required: false,
        validate: [dateValidator, 'Enter date in the following format: DD-MM-YYYY'],
	},
}, {
	timestamps: true
});

var model = mongoose.model('employeeModels', employeeSchema);

const service = constructor(model, router);
module.exports = service;
