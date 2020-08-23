import React from "react"
import Layout from "./layout"

export default function ProjectLayout({ helmet, title, content, link }) {
  return (
    <Layout>
      {helmet}
      <div className="container">
        <div className="box has-text-primary">
          <a target="_blank" rel="noreferrer" href={link}>
            <h1 className="title is-4 has-text-primary has-text-centered mb-4">
              {title}
            </h1>
          </a>
          <div className="has-text-primary">{content}</div>
          <div style={styles.buttonContainer}>
            <a
              id="demo"
              className="has-text-primary has-text-weight-bold mt-4"
              target="_blank"
              rel="noreferrer"
              href={link}
              style={styles.button}
            >
              <button className='button is-primary is-medium is-rounded'>Demo</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  buttonContainer: {
    width: '100%', 
    textAlign: 'center'
  },
  button: {
    margin: 'auto',
  }
}
