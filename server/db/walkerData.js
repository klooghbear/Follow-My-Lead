const connection = require("./connection")

// eslint-disable-next-line no-unused-vars
const { generateHash } = require("authenticare/server")

module.exports = {
  addWalker,
  getUserByName,
  getWalkers,
  getWalker,
  editWalker
}

function getUserByName(username, db = connection) {
  return db("user_table")
    .select()
    .where("username", username)
    .first()
}

function addWalker(walker, db = connection) {
  return db("walker_table")
    .insert(walker).debug()
}

function getWalkers(db = connection) {
  return db("walker_table")
}

function getWalker(id, db = connection) {
  return db("walker_table")
    .select()
    .where({ id: id })
    .first()
}

function editWalker(id, walker, db = connection) {
  return db("walker_table")
    .where("id", id)
    .update({
      first_name: walker.first_name,
      last_name: walker.last_name,
      blurb: walker.blurb,
      photo: walker.photo,
      location: walker.location,
      email: walker.email
    })
    .then()
}
