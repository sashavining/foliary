if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const plantRouter = require('./routes/plants')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


app.use('/', indexRouter)
app.use('/plants', plantRouter)
/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');  
})

app.get('/api', (req, res) => {
    res.json(plants)
})

app.get('/api/:name', (req, res) => {
    const plantName = req.params.name.toLowerCase();
    const matchingPlants = [...plants.filter(x => x.BotanicalName.toLowerCase().includes(plantName)), ...plants.filter(x => x.CommonName.toLowerCase().includes(plantName))]
    if (matchingPlants) {
        return res.json(matchingPlants)
    } else {
        res.statusMessage = "Tea not found!"
        res.status(400).end()
    }
})*/

app.listen(process.env.PORT || 8000)