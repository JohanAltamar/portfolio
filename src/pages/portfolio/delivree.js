import React from "react"
import Layout from "../../components/projectLayout"

const Content = () => (
  <>
    <p className="mb-4">
      Delivree is a web application that helps small and medium size restaurants
      to be present in the internet.
    </p>
    <p className="mb-4">
      Delivree was tought to be useful for restaurants' customers, employees and
      admin staff, making easy the process to place and track the orders.
    </p>
    <p className="mb-4">
      This app can be used through web browsers, but also can be installed on
      your device: personal computer, tablet or cellphone, without paying more
      money for native app development and using Progressive Web Apps Technologies. 
    </p>
  </>
)

export default function Delivree() {
  return (
    <Layout
      title="Delivree"
      content={<Content />}
      link="https://delivree.johanaltamar.com"
    />
  )
}
