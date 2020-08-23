import React from "react"
import Layout from "../../components/projectLayout"
import { Helmet } from "react-helmet"

const Content = () => (
  <>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      What is a Point-Of-Sale App?
    </h2>
    <p className="mb-5">
      A Point-Of-Sale App is a web application that is suitable for retail store
      owners. It helps to manage sales, staff, inventory, etc. This app is still
      under development.
    </p>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      Who is POS App useful for?
    </h2>
    <p className="mb-5">
      This app is useful for those stores that sell products, these can be sold
      by units or wheigth. The stores that can uses the application are clothes,
      fruits, food and retail stores.
    </p>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      In which devices can I use POS App?
    </h2>
    <p className="mb-5">
      This is a responsive app, although it is recommended to be used in desktop
      devices or tablets.
    </p>
    <p>If you want to try it, there are two roles (admin and operator).</p>
    <div className="content mb-3">
      <ol type="1">
        <li className="mb-4">
          Admin
          <ul>
            <li>username: testAdmin</li>
            <li>password: test123</li>
          </ul>
        </li>
        <li>
          Operator
          <ul>
            <li>username: testOperator</li>
            <li>password: test123</li>
          </ul>
        </li>
      </ol>
    </div>
  </>
)

const Head = () => (
  <Helmet>
    <title>Point-Of-Sale Web App</title>
    <meta
      name="description"
      content="A Point-Of-Sale App is a web application developed by Johan Altamar that is suitable for retail store owners. It helps to manage sales, staff, inventory, etc. This app is still under development."
    />
  </Helmet>
)

export default function Delivree() {
  return (
    <Layout
      title="Point-Of-Sale App"
      content={<Content />}
      link="https://pos.johanaltamar.com"
      helmet={<Head />}
    />
  )
}
