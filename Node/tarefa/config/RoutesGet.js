const express = require("express")
const app = express()

//Rotas get
app.get("/", function(req, res){
	res.send("teste");
})
console.log("to no arquivo routes get")

app.get("/formulario", function(req, res){
	res.render("/site/formulario/formulario.handlebars");
})

app.get("/tabela", function(req, res){
	userinfo.findAll({order: [["firstname", "ASC"]]}).then(function(userinfo){
		res.render("userinfo", {usuarios: usuarios})
	})
})

app.get("/usuario/:id", function(req, res){
	userinfo.findOne({where: {"id": req.params.id}}).then((userinfo) =>{
		res.render("userinfo", {usuario: usuario})
	})
})

app.get("/delete/:id", function(req, res){
	userinfo.destroy({where: {"id": req.params.id}}).then(function(){
		res.send("Usuário removido com sucesso")
	}).catch(function(erro){
		res.send("Erro: " + erro)
	})
})
