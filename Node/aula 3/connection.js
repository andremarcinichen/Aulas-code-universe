const Sequelize = require("sequelize")
const sequelize = new Sequelize(
	"nodejs", // nome do banco de dados
	"root",   //usuário de acesso
	"",       //senha de acesso
	{
		host: "localhost", //servidor
		dialect: "mysql"   //tipo do banco de dados
	}
)

sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso")
}).catch(function(erro){
	console.log("Não foi possível conectar: " + erro)
})