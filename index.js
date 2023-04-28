const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const catagories = require('./data/Catagories.json');
const news = require('./data/News.json');

app.use(cors())

app.get ('/', (req, res)=>{
    res.send('dragon news are running')
});

app.get ('/catagories', (req, res)=>{
    res.send(catagories);
});

app.get ('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedNews = news.find(n => parseInt(n._id) === id);
    res.send(selectedNews);
})

app.get('/catagories/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id);
    if(id===0){
        res.send(news);
    }
    else{
        const catagoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(catagoryNews);
    }
})

app.listen(port, ()=>{
    console.log(`dragon news APi are running on ${port}`)
});