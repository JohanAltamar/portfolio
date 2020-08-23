import React from "react"
import Layout from "../../components/projectLayout"
import { Helmet } from "react-helmet"
import PortfolioProjectCarousel from "../../components/portfolioProjectCarousel"
import {
  portraitImages,
  landscapeImages,
} from "../../images/projects/delivree/images"

const Content = () => (
  <>
    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      What is Delivree?
    </h2>
    <p className="mb-5">
      Delivree is a web application that helps small and medium size restaurants
      to be present in the internet. A{" "}
      <a href="#demo" className="has-text-primary">
        {" "}
        demo
      </a>{" "}
      could be found at the bottom of this page.
    </p>

    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      Who is Delivree useful for?
    </h2>
    <p className="mb-5">
      Delivree was tought to be useful for restaurants' customers, employees and
      admin staff, making easy the process to place and track the orders.
    </p>

    <h2 className="subtitle is-6 mb-2 has-text-primary has-text-weight-semibold">
      In which devices can I use Delivree?
    </h2>
    <p className="mb-5">
      This app can be used through web browsers, but also can be installed on
      your device: personal computer, tablet or cellphone, without paying more
      money for native app development and using Progressive Web Apps
      Technologies.
    </p>

    <h2 className="subtitle is-6 mb-3 has-text-primary has-text-weight-semibold">
      Screenshots
    </h2>
    <PortfolioProjectCarousel
      title="Mobile Version"
      images={portraitImages}
      orientation="portrait"
    />

    <PortfolioProjectCarousel
      title="Desktop Version"
      images={landscapeImages}
      orientation="landscape"
    />

    <h2 className="subtitle is-6 mb-3 has-text-primary has-text-weight-semibold">
      Video
    </h2>
    <div className="mb-5 portfolio-project-video">
      <iframe
        title="delivree app video"
        src="https://player.vimeo.com/video/449158442?byline=0&portrait=0"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  </>
)

const Head = () => (
  <Helmet>
    <title>Delivree Web App</title>
    <meta
      name="description"
      content="Delivree App is a web application that helps small and medium size restaurants to be present in the internet.
      Delivree was tought to be useful for restaurants' customers, employees and
      admin staff, making easy the process to place and track the orders.
      This app can be used through web browsers, but also can be installed on
      your device: personal computer, tablet or cellphone, without paying more
      money for native app development and using Progressive Web Apps
      Technologies.
      "
    />
    <script src="https://player.vimeo.com/api/player.js"></script>
  </Helmet>
)

export default function Delivree() {
  return (
    <Layout
      title="Delivree"
      content={<Content />}
      link="https://delivree.johanaltamar.com"
      helmet={<Head />}
    />
  )
}
