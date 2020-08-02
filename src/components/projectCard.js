import React from "react"
import {Link} from "gatsby"
import "./styles/projectCard.css"

export default function ProjectCard({ image, text, link }) {
  return (
    <div className="column is-7-mobile is-4-tablet is-3-desktop">
      <div className="card">
        <div className="card-image">
          <img src={image} alt={`${text} Logo`} />
        </div>
        <div className="card-content">
          <Link
            to={link}
            className="title is-size-6-mobile is-size-5-tablet is-size-4-desktop has-text-centered"
          >
            {text}
          </Link>
        </div>
      </div>
    </div>
  )
}
