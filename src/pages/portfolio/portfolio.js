import React from "react"
import Layout from "../../components/projectLayout"
import { Helmet } from "react-helmet"

const Content = () => (
  <>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      What is a Developer Site?
    </h2>
    <p className="mb-5">
      This is a web page designed and developed by Johan Altamar to show his
      skills as a Web Developer. The webpage was designed using Figma, which is
      a design tool, and developed using Gatsby, a static site generator that is
      based on React. Some images are hosted in Firebase.
    </p>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      What kind of content will be posted?
    </h2>
    <p className="mb-5">
      Here he will add some blogs to help other developers to find out ideas and
      share his knowledge. Blogs will be about web development, design and devs
      trends and electronics.
    </p>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      In which devices can I see this site?
    </h2>
    <p className="mb-5">
      This web site can be used through web browsers, but also can be installed
      on your device: personal computer, tablet or cellphone due to Progressive
      Web Apps feature.
    </p>
  </>
)

const Head = () => (
  <Helmet>
    <title>Web Developer Site</title>
    <meta
      name="description"
      content="Web Developer Site is a web page designed and developed by Johan Altamar in order to show his skills and web technologies knowledge."
    />
  </Helmet>
)

export default function DeveloperSite() {
  return (
    <Layout
      title="Web Developer Site"
      content={<Content />}
      link="https://johanaltamar.com"
      helmet={<Head />}
    />
  )
}
