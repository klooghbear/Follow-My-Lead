import request from "superagent"
import { getEncodedToken } from "authenticare/client"

const URL = "/api/walker/"

export function addWalker(walker) {
  return request.post(URL)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ "Content-Type": "application/json" })
    .send(walker)
}

export function getWalkers(URL) {
  return request.get(URL)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ Accept: "application/json" })
    .then(res => { return res.body.walker })
    .catch((error) => {
      console.log(error)
    })
}

export function fetchUser(id) {
  return request.get("/api/user/" + id)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ "Content-Type": "application/json" })
    .then(res => {
      return res.body
    })
}

export function getWalker(id) {
  return request
    .get(URL + id)
    .then(response => response.body)
}

export function editWalker(id, walker) {
  return request.put(URL + id + "/edit") // this needs an id
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ Accept: "application/json" })
    .send(walker)
    .then(res => res.body.walker)
    .catch((err) => {
      console.log(err)
    })
}
