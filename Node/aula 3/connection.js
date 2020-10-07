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

const usuarios = sequelize.define('usuarios', {
	firstname: {
		type: Sequelize.STRING
	},
	lastname: {
		type: Sequelize.STRING
	}
})

// usuarios.sync({force: true})

// usuarios.create({
// 	firstname: "Mario",
// 	lastname: "Bros"
// })


// sequelize.query('SELECT * FROM usuarios',
//   {type: sequelize.QueryTypes.SELECT }
// ).then(function(usuarios) {
//   console.log(usuarios)
// })

// sequelize.query('UPDATE usuarios SET firstname = "Super Mario" WHERE id = 1',
//   {type: sequelize.QueryTypes.UPDATE}
// )

sequelize.query('DELETE from usuarios WHERE id = 1',
  {type: sequelize.QueryTypes.DELETE}
)
