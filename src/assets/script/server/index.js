/* eslint-disable */
'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const _ = require('lodash');
const OPTIONS = require('../../../../tools/paths');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(OPTIONS.DIR.BUILD));



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/openscope', { useMongoClient: true });
mongoose.Promise = global.Promise;

const AircraftModel = require('./app/aircraft/AircraftModel');
const API_BASE = '/api/v1/aircraft';

router.get(`${API_BASE}`, (request, response) => {
    AircraftModel.find()
        .then((doc) => {
            response.status(200).json({ aircraft: doc });
        });
});

router.post(`${API_BASE}`, (request, response) => {
    const aircraft = new AircraftModel({
        name: request.body.name,
        icao: request.body.icao
    });

    aircraft.save();

    response.status(200).json(aircraft);
});

router.get(`${API_BASE}/:id`, (request, response) => {
    AircraftModel.findById(request.params.id)
        .then((doc) => {
            response.status(200).json({ aircraft: doc });
        });
});


// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
router.get('*', function(request, response) {
  response.sendFile(path.resolve(OPTIONS.ROOT, 'build', 'index.html'));
})

app.use('/', router);

app.listen(port)
console.log('\nServer started on port ' + port);
