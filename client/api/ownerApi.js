import request from "superagent"
import { getEncodedToken } from "authenticare/client"

export const addOwner = (owner) => {
  const path = "/api/owner/"

  return request.post(path)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ "Content-Type": "application/json" })
    .send(owner)
    .catch((error) => {
      Promise.reject(error)
    })
}

export const getOwner = (id) => {
  const path = `/api/owner/${id}`

  return request.get(path).then((owner) => {
    const { body } = owner

    return body
  }).catch((error) => {
    Promise.reject(error)
  })
}

export const editOwner = (id, owner) => {
  const path = `/api/owner/${id}/edit`

  return request.put(path)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ Accept: "application/json" })
    .send(owner)
    .then((res) => {
      const { owner } = res.body

      return owner
    }).catch((error) => {
      Promise.reject(error)
    })
}
