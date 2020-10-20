const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const tabela = require("./models/tabela")

//template engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas get
app.get("/formulario", function(req, res){
	res.render("formulario");
})

app.get("/tabela", function(req, res){
	usuarios.findAll({order: [["firstname", "ASC"]]}).then(function(usuarios){
		res.render("usuarios", {usuarios: usuarios})
	})
})

app.get("/usuario/:id", function(req, res){
	usuarios.findOne({where: {"id": req.params.id}}).then((usuario) =>{
		res.render("usuario", {usuario: usuario})
	})
})

//rotas post
app.post("/cadastro", function(req, res){
	usuarios.create({
		firstname: req.body.firstname,
		lastname: req.body.lastname
	}).then(function(){
		res.send("Usuário criado com sucesso")
	}).catch(function(erro){
		res.send("Não foi possível criar o usuário, erro: " + erro)
	})
})


app.post("/alteracao", function(req, res){
	usuarios.findOne({where: {"id": req.body.id}}).then(function(usuario){
		
		usuario.firstname = req.body.firstname
		usuario.lastname = req.body.lastname

		usuario.save().then(() => {
			res.send("Usuário alterado com sucesso <a href=usuarios>Voltar</a>");
		})

	})
})

app.get("/delete/:id", function(req, res){
	usuarios.destroy({where: {"id": req.params.id}}).then(function(){
		res.send("Usuário removido com sucesso")
	}).catch(function(erro){
		res.send("Erro: " + erro)
	})
})

app.listen(8081, function(){
	console.log("Servidor está rodando na url localhost:8081")
})