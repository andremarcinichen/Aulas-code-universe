const express = require("express")
const app = express()

app.get("/", function(req, res){
	res.send("Seja bem vindo ao meu app")
})

app.get("/sobre", function(req, res){
	res.send("Página sobre")
})

	app.get("/aluno/:nome/:sobrenome", function(req, res){
	res.send("<h1>"+req.params.nome+"</h1>" + "<h2>"+req.params.sobrenome+"</h2>")
})

app.listen(8081, function(){
	console.log("Servidor está rodando na url localhost:8081")
})