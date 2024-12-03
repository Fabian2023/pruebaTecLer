const express = require("express")
const { createUser,getUsers } = require("../controlllers/users")

const router = express.Router()

router.post("/", createUser);
router.get("/", getUsers);

module.exports = router