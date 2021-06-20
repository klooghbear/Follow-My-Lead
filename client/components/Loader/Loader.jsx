import React from "react"

import "./Loader.scss"

export default function Loader({ type }) {
  return (
    <div className={`app-loader-${type}`}>
      <div className={`app-loader-${type}__icon`}></div>

      <div className={`app-loader-${type}__icon`}></div>

      <div className={`app-loader-${type}__icon`}></div>
    </div>
  )
}
