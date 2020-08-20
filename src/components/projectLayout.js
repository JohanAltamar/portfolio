import React from "react"
import Layout from "./layout"

export default function ProjectLayout({ helmet, title, content, link }) {
  return (
    <Layout>
      {helmet}
      <div className="container">
        <div className="box has-text-primary">
          <a target="_blank" rel="noreferrer" href={link}>
            <h1 className="title is-4 has-text-primary has-text-centered">
              {title}
            </h1>
          </a>
          <div className="has-text-primary">{content}</div>
          <div>
            <a
              id="demo"
              className="has-text-primary has-text-weight-bold"
              target="_blank"
              rel="noreferrer"
              href={link}
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
