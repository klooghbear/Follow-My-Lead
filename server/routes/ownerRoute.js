const express = require("express")
const { getTokenDecoder } = require("authenticare/server")
const db = require("../db/ownerData")
const router = express.Router()

router.get("/", (req, res) => {
  db.getOwners()
    .then(owners => {
      return res.json(owners)
    })
})

router.post("/", getTokenDecoder(), (req, res) => {
  const owner = req.body
  owner.user_id = req.user.id
  db.addOwner(owner)
    .then(id => {
      res.json({ id: id[0] })
    }).catch((error) => {
      console.log(error)
      res.status(500).json({})
    })
})

router.put("/:id/edit", getTokenDecoder(), (req, res) => {
  const id = req.params.id
  const updatedOwner = req.body
  db.editOwner(id, updatedOwner)
})

router.get("/:id", (req, res) => {
  db.getOwner(req.params.id).then(owner => {
    res.json(owner)
  })
})

module.exports = router
