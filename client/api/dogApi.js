import request from "superagent"
import { getEncodedToken } from "authenticare/client"

const apiDogUrl = "/api/dogs/"

export function getDogs() {
  return request
    .get(apiDogUrl)
    .then(res => res.body)
}

export function getDog(id) {
  return request
    .get(apiDogUrl + id)
    .then(res => res.body)
}

export function getDogOwner() {
  return request
    .get(apiDogUrl)
    .then(res => res.body)
}

export function addDog(dog) {
  return request
    .post(apiDogUrl)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .send(dog)
    .then(res =>
      res.body
    )
}

export function editDog(id, owner) {
  console.log(owner)
  return request.put(URL + id + "/edit")
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ Accept: "application/json" })
    .send(owner)
    .then(res => res.body.owner)
    .catch(err => console.log(err))
}
