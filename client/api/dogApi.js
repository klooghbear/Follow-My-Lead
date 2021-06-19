import request from "superagent"
import { getEncodedToken } from "authenticare/client"

export const getDogs = () => {
  const path = "/api/dogs/"

  return request.get(path).then((dogs) => {
    const { body } = dogs

    return body
  }).catch((error) => {
    Promise.reject(error)
  })
}

export const getDog = (id) => {
  const path = `/api/dogs/${id}`

  return request.get(path).then((dog) => {
    const { body } = dog

    return body
  }).catch((error) => {
    Promise.reject(error)
  })
}

export const getDogOwner = () => {
  const path = "/api/dogs/"

  return request.get(path).then((dogs) => {
    const { body } = dogs

    return body
  }).catch((error) => {
    Promise.reject(error)
  })
}

export const addDog = (dog) => {
  const path = "/api/dogs/"

  return request.post(path)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ Accept: "application/json" })
    .send(dog)
    .then((dog) => {
      console.log(dog)
      const { body } = dog

      return body
    }).catch((error) => {
      Promise.reject(error)
    })
}

export const editDog = (id, owner) => {
  const path = `/api/dogs/${id}/edit`

  return request.put(path)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ Accept: "application/json" })
    .send(owner)
    .then((response) => {
      console.log(response)
      const { owner } = response.body
      
      return owner
    }).catch((error) => {
      Promise.reject(error)
    })
}
