const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const catagories = require('./data/Catagories.json');

app.use(cors())

app.get ('/', (req, res)=>{
    res.send('dragon news are running')
});

app.get ('/catagories', (req, res)=>{
    res.send(catagories);
});

app.listen(port, ()=>{
    console.log(`dragon news APi are running on ${port}`)
});