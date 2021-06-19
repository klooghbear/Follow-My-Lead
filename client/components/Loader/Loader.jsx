import React from "react"

export default function Loader({ type }) {
  return (
    <div className={`app-loader__${type}`}>
      <div className={`app-loader__${type}__icon`}></div>

      <div className={`app-loader__${type}__icon`}></div>
      
      <div className={`app-loader__${type}__icon`}></div>
    </div>
  )
}
