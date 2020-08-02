import React from "react"
import Layout from "./layout"

export default function ProjectLayout(props) {
  return (
    <Layout>
      <div className="container">
        <div className="box has-text-primary">
          <h1 className="title is-4 has-text-primary has-text-centered">
            {props.title}
          </h1>
          <div>{props.content}</div>
          <div>
            <a
              className="has-text-primary has-text-weight-bold"
              target="_blank"
              rel="noreferrer"
              href={props.link}
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
