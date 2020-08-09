import React from "react"
import "typeface-montserrat-alternates"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <Layout>
      <div className="columns is-centered" style={style.index}>
        <Helmet
          title="Web Development"
          meta={[
            {
              name: "description",
              content:
                "Johan Altamar, an electronic engineer with knowledge in web development, front-end and embedded systems technologies",
            },
            { charSet: "utf-8" },
          ]}
        >
          <html lang="en" />
          <link rel="canonical" href="https://johanaltamar.com/" />
        </Helmet>
        <div className="column is-8">
          <h4 className="title">
            Hi, I'm Johan. An electronic engineer with knowledge in front-end
            and embedded systems technologies.
          </h4>
        </div>
      </div>
    </Layout>
  )
}

const style = {
  index: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
}

export default Home
