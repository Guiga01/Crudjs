const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/aliens')
const url = 'mongodb+srv://userAula:guiga1998@clusteraula.fc8za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(alienRouter, () => {
    console.log('Tudo ok!')
})