const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const tabela = require("../models/tabela")
var routesGet = require("./RoutesGet")
var routesPost = require("./RoutesPost")

//template engine
app.engine("handlebars", handlebars({defaultLayout: "layout"}))
app.set("view engine", "handlebars")

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get(routesGet)
app.post(routesPost)

app.listen(8081, function(){
	console.log("Servidor está rodando na url localhost:8081")
})