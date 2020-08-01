import React, { useState } from "react"
import Layout from "../components/layout"
import Section from "../components/portfolioSection"
import SkillCard from "../components/skillCard"
import reactLogo from "../images/skills/react.svg"
import nodeLogo from "../images/skills/nodejs.svg"
import firebaseLogo from "../images/skills/firebase.svg"
import arduinoLogo from "../images/skills/arduino.svg"
import cssLogo from "../images/skills/css.svg"
import htmlLogo from "../images/skills/html.svg"
import gatsbyLogo from "../images/skills/gatsby.svg"
import mongoLogo from "../images/skills/mongodb.svg"
import raspberryLogo from "../images/skills/raspberry.svg"
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
          <SkillCard image={reactLogo} text="React" />
          <SkillCard image={gatsbyLogo} text="Gatsby" />
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
          collapse={true}
          handleTitleClick={toggleProjects}
          collapse={!showProjects}
        >
          <SkillCard image={firebaseLogo} text="Firebase" />
          <SkillCard image={mongoLogo} text="Mongo DB" />
          <SkillCard image={arduinoLogo} text="Arduino" />
          <SkillCard image={raspberryLogo} text="Raspberry Pi" />
        </Section>
      </div>
    </Layout>
  )
}
