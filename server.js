const express = require('express')
const app = express()
const mongoose = require('mongoose');

const cookieParser = require('cookie-parser');

const cors = require('cors');

const loginroutes_Urls = require('./routes/loginroute');
const survey = require('./routes/surveyroute');

mongoose.connect('mongodb+srv://andiswamaseko04:TM6IvUNXQXz5MHFx@cluster0.akfxvij.mongodb.net/mytable?retryWrites=true&w=majority',

{ useNewUrlParser: true,

useUnifiedTopology: true })

.then(() => {

console.log('Connected to MongoDB');

})

.catch((error) => {

console.error('Error connecting to MongoDB:', error);

});

app.use(cookieParser());

app.use(express.json())

app.use(cors())

app.use('/app', loginroutes_Urls);
app.use('/app', survey);

app.listen(4000, ()=> console.log("server is up and running"))