import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
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

  const toggleSkills = () => {
    setShowSkills(!showSkills)
    if (!showSkills) {
      document.getElementById("skills").scrollLeft = 0
    }
  }

  return (
    <Layout>
      <div id="portfolio-container" className="container">
        <section
          id="portfolio-skills"
          className="box is-fullwidth global-transition"
          style={!showSkills ? styles.skillsHiddenBox : styles.skillsActiveBox}
        >
          <h1
            className="title"
            style={styles.brandColor}
            onClick={toggleSkills}
          >
            Skills
            <FontAwesomeIcon
              icon={!showSkills ? faChevronDown : faChevronUp}
              style={styles.skillsIcon}
            />
          </h1>
          <div
            id="skills"
            className="columns is-mobile global-transition-delayed"
            style={
              !showSkills ? styles.skillsHiddenItems : styles.skillsActiveItems
            }
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
          </div>
        </section>
        <section id="portfolio-projects" className="box">
          <h1 className="title" style={styles.brandColor}>
            Latest Projects
          </h1>
        </section>
      </div>
    </Layout>
  )
}

const styles = {
  container: {
    minWidth: "calc(100% - 1.5rem)",
  },
  brandColor: {
    color: "#8A4D76",
  },
  skillsIcon: {
    color: "#8A4D76",
    position: "absolute",
    top: "1.25rem",
    right: "1.25rem",
  },
  skillsHiddenBox: {
    // maxHeight: "calc(36px + (2 * 1.25rem))",
  },
  skillsActiveBox: {
    maxHeight: "70vh",
    overflowY: "hidden",
  },
  skillsHiddenItems: {
    visibility: "hidden",
    overflowX: "hidden",
    opacity: "0",
  },
  skillsActiveItems: {
    visibility: "visible",
    opacity: "1",
    overflowX: "auto",
  },
}
