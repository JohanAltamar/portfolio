import React from "react"
import Layout from "../../components/layout"
import BgImage from "../../images/underConstruction.webp"

export default function About() {
  return (
    <Layout justifyContent="center" alignItems="center">
      <div className="column is-5">
        <div className="container box">
          <img src={BgImage} alt="Section under construction" />
        </div>
      </div>
    </Layout>
  ) 
}
