import React from "react"
import "./styles/skillCard.css"

export default function SkillCard({ image, text }) {
  return (
    <div className="column is-7-mobile is-4-tablet is-3-desktop">
      <div className="card">
        <div className="card-image" >
          <img src={image} alt={`${text} Logo`}/>
        </div>
        <div className="card-content">
          <p className="title is-size-6-mobile is-size-5-tablet is-size-4-desktop has-text-centered"> {text}</p>
        </div>
      </div>
    </div>
  )
}