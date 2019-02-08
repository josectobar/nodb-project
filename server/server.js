const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const ctrl = require('./controller')
const PORT = 4000

app.use(bodyParser.json())

const apiUrl = '/api/directory'

//ENDPOINT 
app.get(apiUrl, ctrl.getDirectory)

app.post(apiUrl, ctrl.addToDirectory)

app.put(`${apiUrl}/:id`, ctrl.editDirectory)

app.delete(`${apiUrl}/:id`, ctrl.deleteEntry)

app.listen(4000, () => console.log('We are live on 4000!!'))