const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const aircraftSchema = Schema({
    name: { type: String, required: true },
    icao: { type: String, required: true }
}, { collection: 'aircraft' });

const AircraftModel = mongoose.model('AirplaneModel', aircraftSchema);

module.exports = AircraftModel;
