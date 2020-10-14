const db = require("./db")

const usuarios = db.sequelize.define("tabela1", {
	firstname: {
		type: db.Sequelize.STRING
	},
	lastname: {
		type: db.Sequelize.STRING
	}
})

module.exports = tabela1
// usuarios.sync({force: true})