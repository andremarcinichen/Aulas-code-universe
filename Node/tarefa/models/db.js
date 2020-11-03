global.Sequelize = require("sequelize")
global.sequelize = new Sequelize("Tabeladefilmes", "root", "", {
		host: "localhost",
		dialect: "mysql"
	}
)

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}