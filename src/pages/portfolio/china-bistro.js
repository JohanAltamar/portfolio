import React from "react"
import Layout from "../../components/projectLayout"
import { Helmet } from "react-helmet"

const Content = () => (
  <>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      What is China Bistro Restaurant?
    </h2>
    <p className="mb-5">
      China Bistro Restaurant is a website built during a web development
      course.
    </p>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      Who is this site useful for?
    </h2>
    <p className="mb-5">
      The site is useful for owners and customers. The first ones can show the
      products and services, while the customers can choose over the products
      they offer.
    </p>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      In which devices can I use this site?
    </h2>
    <p className="mb-5">
      As a responsive website, this is well shown through the different devices:
      desktop. tablet and mobile.
    </p>
  </>
)

const Head = () => (
  <Helmet>
    <title>China Bistro Web Page</title>
    <meta
      name="description"
      content="China Bistro Restaurant is a website built by Johan Altamar during a web development course."
    />
  </Helmet>
)

export default function ChinaBistroRestaurant() {
  return (
    <Layout
      title="China Bistro Restaurant"
      content={<Content />}
      link="https://bistro.johanaltamar.com"
      helmet={<Head />}
    />
  )
}
