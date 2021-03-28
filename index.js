const express = require('express');
const app = express();
const redditData = require('./data.json');
console.log(redditData);
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/r/:subreddit', (req,res) => {
     
     const {subreddit} = req.params;

    const data = redditData[subreddit];
    console.log(data);
    if(data){
        res.render('subreddit', { ...data } );
    }
    else{
        res.render('notFound', { subreddit });
    }
     
})

app.get('/cats', (req,res) => {

    const cats = [ 'Black', 'Grey', 'White', 'Orange', 'Yellow'];
    
    res.render('cats', { cats });

})

app.get('/ran', (req,res) => {

    const num = Math.floor(Math.random() * 10 ) + 1 ;
    res.render('random', {rand : num });

})


app.get('/', (req,res) => {

    res.render('home');

})


app.listen(3000, () => {

    console.log('Listening on 3000');

})