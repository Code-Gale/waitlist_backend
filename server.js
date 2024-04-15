const express = require('express')
const mongoose = require('mongoose')
const Email = require('./models/email')

//creating app
const app = express();

//connecting to mongodb
mongoose.connect('mongodb://localhost/waitlist')
    .then((result) => {
        console.log('Connected to DB')
    })
    .catch((err) => {
        console.log(err)
    })

//listening on port 3000
app.listen(3000)

//setting view engine
app.set('view engine', 'ejs')
app.set('views', 'public')

//setting middlewares
app.use(express.static('public'))
app.use(express.static(__dirname))
app.use(express.urlencoded({ extended : true}))

//handling requests
app.get('/', (req, res) => {
    res.render('index', { title : 'Waitlist'})
})
app.post('/api/waitlist', (req, res) => {
    const email = new Email(req.body)
    email.save()
        .then((result) => {
            console.log('Added to Waitlist')
            res.redirect('/')
        })
        .catch((err) => {
            console.log('Could not add to Waitlist', err)
        })
})