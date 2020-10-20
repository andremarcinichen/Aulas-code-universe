const db = require("./db")

const userinfo = db.sequelize.define("userinfo", {
	firstname: {
		type: db.Sequelize.STRING
	},
	lastname: {
		type: db.Sequelize.STRING
	}
})
// userinfo.sync({force: true})
module.exports = userinfo
