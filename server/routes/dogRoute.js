const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/dogData')

const router = express.Router()
const {getUserDetails} = require('../db/userData')

router.get('/', (req, res) => {
    db.getDogs()
        .then(dogs => {

            return res.json(dogs)
        })
})

router.get('/:id', (req, res) => {
    db.getDog(req.params.id)
        .then(dog => {
            res.json(dog)
        })
})


router.put('/:id', (req, res) => {
    let id = req.params.id
    let dog = req.body

    db.updateDog(id, dog)
        .then(response => {
            res.json({})
        })
})

router.post('/', getTokenDecoder(), (req, res) => {
    // console.log(req.files)
    // console.log("youve made it to the post route")  
    const dog = req.body
    getUserDetails(req.user.id).then(user => {
        dog.owner_id = user.owner.id
        return db.addDog(dog)
            .then(id => {
                res.json({ id: id[0] })
            })
    })
        .catch(err => {
            // console.log(err)
            res.status(500).json({})
        })

})


module.exports = router 