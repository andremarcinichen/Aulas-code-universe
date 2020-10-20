const db = require("./db")

const usuarios = db.sequelize.define("tabela", {
	firstname: {
		type: db.Sequelize.STRING
	},
	lastname: {
		type: db.Sequelize.STRING
	}
})

module.exports = tabela
// usuarios.sync({force: true})