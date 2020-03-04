const { generateHash } = require('authenticare/server')

const connection = require('./connection')

function getDogs(db = connection) {
    return db('dog_table')
        .select()
        .orderBy('id', 'desc')
}


function getDog(id, db = connection) {
    return db('dog_table')
        .where('id', id)
        .first()
}



function addDog(dog, db = connection) {
    return db('dog_table')
        .insert(dog, 'id')
        .debug()
}

module.exports = {
    getDogs,
    getDog,
    addDog,
}