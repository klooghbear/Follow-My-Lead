const connection = require("./connection")

// eslint-disable-next-line no-unused-vars
const { generateHash } = require("authenticare/server")

function getDogs(db = connection) {
  return db("dog_table")
    .select()
    .orderBy("id", "desc")
}

function getDog(id, db = connection) {
  return db("dog_table")
    .where("id", id)
    .first()
}

function addDog(dog, db = connection) {
  return db("dog_table")
    .insert(dog)
    .debug()
}

module.exports = {
  getDogs,
  getDog,
  addDog
}
