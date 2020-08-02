import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

export default function PortfolioSection({
  id,
  columnsId,
  title,
  handleTitleClick,
  collapse,
  children,
}) {

    const handleKeyDown = (event) => {
        if(event.keyCode === 13){
            handleTitleClick();
        }
    }
  return (
    <section
      id={id}
      className="box is-fullwidth global-transition"
      style={collapse ? styles.skillsHiddenBox : styles.skillsActiveBox}
    >
      <h1
        className="title"
        style={styles.brandColor}
        onClick={handleTitleClick}
        onKeyDown={handleKeyDown}
        role="presentation"
      >
        {title}
        <FontAwesomeIcon
          icon={collapse ? faChevronDown : faChevronUp}
          style={styles.skillsIcon}
        />
      </h1>
      <div
        id={columnsId}
        className="columns is-mobile global-transition-delayed"
        style={collapse ? styles.skillsHiddenItems : styles.skillsActiveItems}
      >
        {children}
      </div>
    </section>
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
    top: "0.1rem",
    right: "0.1rem",
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
