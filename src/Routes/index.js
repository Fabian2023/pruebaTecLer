const express = require("express")
const router = express.Router()
const mainRoutes = require("../Routes/mainRoutes")

router.use("/api/data",mainRoutes)

module.exports = router