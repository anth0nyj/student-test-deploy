const express  = require('express');
const mongoose = require('mongoose');
const app      = express();

// process.env.PORT
const PORT = process.env.PORT || 3000;

// process.env.MONGODB_URI
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:/student-test-deploy';

mongoose.connect(mongoURI, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', (err) => console.log('Mongo error: ', err));
db.on('connected', () => console.log('Mongo connected: ', mongoURI));

// routes
app.get('/', (req, res) => res.send('Welcome'));

app.listen(PORT, () => console.log('App running on port: ', PORT));
