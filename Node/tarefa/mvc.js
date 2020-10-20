const express = require("express")
const app = express()
const route = require("././config/routes.js")

app.use(route())