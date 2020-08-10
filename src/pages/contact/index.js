import React from "react"
import Form from "../../components/contactForm"
import Layout from "../../components/layout"

export default function Contact() {
  return (
    <Layout justifyContent="center">
      <div className="column is-10-tablet is-7-desktop">
        <div
          id="contact-form-container"
          className="container box has-text-centered"
        >
          <h2 className="subtitle is-6 has-text-primary mb-3">
            You can email me to
          </h2>
          <h1 className="title is-6 mt-1 mb-4">
            <a
              className="has-text-primary"
              href="mailto:contacto@johanaltamar.com"
            >
              contacto@johanaltamar.com
            </a>
          </h1>
          <h2 className="subtitle is-6 has-text-primary mt-1">
            or leave your info below
          </h2>
          <Form />
        </div>
      </div>
    </Layout>
  )
}
