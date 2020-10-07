const db = require("./db")

const usuarios = db.sequelize.define("usuarios", {
	firstname: {
		type: db.Sequelize.STRING
	},
	lastname: {
		type: db.Sequelize.STRING
	}
})

module.exports = usuarios
usuarios.sync({force: true})