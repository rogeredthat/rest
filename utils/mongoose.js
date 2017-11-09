//Import the mongoose module
var connection = function (callback) {
	var mongoose = require('mongoose');
	mongoose.Promise = global.Promise;
	mongoose.connect("mongodb://127.0.0.1/Employee");
	var db = mongoose.connection;

	db.on('error', function (error) {
		console.error.bind(console, 'mongoose: MongoDB connection error:');
		if (callback) callback(error);
	});
	db.on('connected', function () {
		console.log("mongoose: Connected to Employee");
	});
};
module.exports = connection;
