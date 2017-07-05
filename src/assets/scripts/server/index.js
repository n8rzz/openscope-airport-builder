/* eslint-disable */
'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();
const OPTIONS = require('../../../../tools/paths');

app.use(express.static(OPTIONS.DIR.BUILD));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.listen(port)
console.log('\nServer started on port ' + port);
