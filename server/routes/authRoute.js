const express = require("express")
const { applyAuthRoutes } = require("authenticare/server")
const { createUser } = require("../db/userData")
const { userExists, getUserByName } = require("../db/userData")

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName,
  createUser
})

module.exports = router
