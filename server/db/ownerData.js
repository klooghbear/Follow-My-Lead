// const knex = require('knex')
// const config = require('../../knexfile')
// const env = process.env.NODE_ENV || 'development'
// const connection = knex(config[env])

const connection = require('./connection')

function getOwners(db = connection) {
    return db('owner_table').select()
}


function getOwner(id, db = connection) {
    return db('owner_table')
        .where('id', id)
        .first()
}


//Add auth shit
function addOwner(owner, db=connection){
    return db('owner_table')
        .insert(owner).debug()
}

//commmented out by Josh - new edit owner function written. 3/3

// function updateOwner(id, owner, db = connection) {
//     return db('owner_table')
//         .where('id', id)
//         .update(owner)
//     // .insert(owner).debug()

// }

function editOwner(id, owner, db= connection){
    console.log('db function working')
    return db('owner_table')
    .where('id', id)
    .update({
        first_name: owner.first_name,
        last_name: owner.last_name,
        email: owner.email,
        photo: owner.photo,
        location: owner.location     
    })
    .then()
}

module.exports = {
    getOwners,
    getOwner,
    addOwner,
    editOwner
    
}