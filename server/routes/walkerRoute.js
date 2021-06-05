const express = require("express")
const { getTokenDecoder } = require("authenticare/server")
const db = require("../db/walkerData")
const router = express.Router()

router.get("/", (req, res) => {
  db.getWalkers()
    .then(walkers => {
      res.json(walkers)
    })
})

router.post("/", getTokenDecoder(), (req, res) => {
  const walker = req.body
  walker.user_id = req.user.id
  db.addWalker(walker)
    .then(id => {
      res.json({ id: id[0] })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({})
    })
})

router.put("/:id/edit", getTokenDecoder(), (req, res) => {
  const id = req.params.id
  const updatedWalker = req.body
  db.editWalker(id, updatedWalker)
})

// Unsure on this code? ask Rich
router.get("/:id", (req, res) => {
  db.getWalker(req.params.id)
    .then(walker => {
      res.json(walker)
    })
})

module.exports = router
