import React, { useState } from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import Section from "../../components/portfolioSection"
import SkillCard from "../../components/skillCard"
import ProjectCard from "../../components/projectCard"
import reactLogo from "../../images/skills/react.svg"
import nodeLogo from "../../images/skills/nodejs.svg"
import firebaseLogo from "../../images/skills/firebase.svg"
import arduinoLogo from "../../images/skills/arduino.svg"
import cssLogo from "../../images/skills/css.svg"
import htmlLogo from "../../images/skills/html.svg"
import gatsbyLogo from "../../images/skills/gatsby.svg"
import mongoLogo from "../../images/skills/mongodb.svg"
import raspberryLogo from "../../images/skills/raspberry.svg"
import pwaLogo from "../../images/skills/pwa.svg"
import materialUiLogo from "../../images/skills/materialUi.svg"
import javascriptLogo from "../../images/skills/javascript.svg"
import bootstrapLogo from "../../images/skills/bootstrap.svg"

import delivreePage from "../../images/projects/delivree.webp"
import portfolioPage from "../../images/projects/portfolio.webp"
import posPage from "../../images/projects/pos-system.webp"
import chinaPage from "../../images/projects/china-bistro.webp"

import "./portfolio.css"

export default function Contact() {
  const [showSkills, setShowSkills] = useState(false)
  const [showProjects, setShowProjects] = useState(true)

  const toggleSkills = () => {
    setShowSkills(!showSkills)
    if (!showSkills) {
      document.getElementById("skills").scrollLeft = 0
    }
  }

  const toggleProjects = () => {
    setShowProjects(!showProjects)
    if (!showProjects) {
      document.getElementById("projects").scrollLeft = 0
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Portfolio & Skills</title>
        <meta 
          name="description" 
          content="Page to show skills and latest projects made by Johan Altamar. React, node js, html, css, javascript and firebase are some of the web technologies that Johan Altamar knows. Projects for restaurants apps, point of sale apps can be found."/>
      </Helmet>
      <div id="portfolio-container" className="container">
        <Section
          id="portfolio-skills"
          columnsId="skills"
          title="Skills"
          handleTitleClick={toggleSkills}
          collapse={!showSkills}
        >
          <SkillCard image={htmlLogo} text="HTML5" />
          <SkillCard image={cssLogo} text="CSS3" />
          <SkillCard image={javascriptLogo} text="Javascript" />
          <SkillCard image={reactLogo} text="React" />
          <SkillCard image={gatsbyLogo} text="Gatsby" />
          <SkillCard image={bootstrapLogo} text="Bootsrap" />
          <SkillCard image={materialUiLogo} text="MaterialUI" />
          <SkillCard image={pwaLogo} text="PWA" />
          <SkillCard image={nodeLogo} text="Node Js" />
          <SkillCard image={firebaseLogo} text="Firebase" />
          <SkillCard image={mongoLogo} text="Mongo DB" />
          <SkillCard image={arduinoLogo} text="Arduino" />
          <SkillCard image={raspberryLogo} text="Raspberry Pi" />
        </Section>
        <Section
          id="portfolio-projects"
          columnsId="projects"
          title="Latest Projects"
          handleTitleClick={toggleProjects}
          collapse={!showProjects}
        >
          <ProjectCard image={delivreePage} text="Delivree" link="delivree" />
          <ProjectCard
            image={portfolioPage}
            text="Portfolio"
            link="portfolio"
          />
          <ProjectCard image={posPage} text="Pos System" link="pos-system" />
          <ProjectCard
            image={chinaPage}
            text="China Bistro"
            link="china-bistro"
          />
        </Section>
      </div>
    </Layout>
  )
}
