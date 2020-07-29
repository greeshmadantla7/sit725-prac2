var express = require('express')
var app = express()
//storing data in array
let arrays = [
    {id:1,name: 'sree',deposit:5},
    {id:2,name: 'duth',deposit:5},
    {id:3,name: 'deepu',deposit:15}
]
//retriving the data from array
app.get('/', function (req, res) {
    app.send(arrays);
})