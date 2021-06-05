import request from "superagent"

const apiDogFeedbackUrl = "/api/dogfeedback"

export function getDogFeedback(id) {
  return request
    .get(apiDogFeedbackUrl + id)
    .then(res => res.body)
}
