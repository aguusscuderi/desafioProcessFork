require('dotenv').config()
const express = require('express')
const app = express()
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const PROCESS_DATA = require('./process')
const serverRouter = require('./routes/router')
const PORT = Number(argv._) || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', './views/layouts')


app.get('/', (req, res) => {
    res.send('BIENVENIDO AL DESAFIO DE PROCESS OBJECT.')
})

app.get('/info', (req, res)=>{
    res.render('index', PROCESS={PROCESS_DATA})
})

serverRouter(app)

app.listen(PORT, () => {
    console.log(`Estas conectado a http://localhost:${PORT}`)
})
