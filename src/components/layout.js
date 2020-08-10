import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./styles/bulmaVariables.scss"
import "./styles/layout.css"
import { Helmet } from "react-helmet"

const DeepLink = ({ children, ...props }) => {
  const [mainPath, setMainPath] = useState(null)
  useEffect(() => {
    const pathName = window.location.pathname
    setMainPath(pathName.match(new RegExp(children, "i")))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // console.log(mainPath !== null)

  return (
    <Link
      className={`navbar-item ${mainPath ? "is-active" : undefined}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default function Layout({ children, justifyContent }) {
  const [menuStatus, setMenuStatus] = useState(false)

  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      toggleMenu()
    }
  }

  const toggleMenu = () => {
    setMenuStatus(!menuStatus)
  }

  return (
    <section className="hero is-fullheight">
      <Helmet titleTemplate="Johan Altamar - %s">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      </Helmet>
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand" style={style.navbarBrand}>
              <Link id="brand-name" className="navbar-item" to="/">
                Johan Altamar
              </Link>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroA"
                onClick={toggleMenu}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
                aria-label="menu button"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div
              id="navbarMenuHeroA"
              className={`navbar-menu ${menuStatus && "is-active"}`}
            >
              <div className="navbar-end" style={style.navbarLinks}>
                <Link
                  className="navbar-item"
                  to="/"
                  activeClassName="is-active"
                >
                  Home
                </Link>
                <DeepLink to="/portfolio">Portfolio</DeepLink>
                <DeepLink to="/blog">Blog</DeepLink>
                <DeepLink to="/contact">Contact</DeepLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="hero-body"
        style={{ ...style.heroBody, justifyContent }}
      >
        {children}
      </div>
      <div className="hero-foot"></div>
    </section>
  )
}

const style = {
  brandName: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    letterSpacing: "0.125rem",
  },
  navbarBrand: {
    display: "flex",
    alignItems: "center",
  },
  navbarLinks: {
    fontSize: "1.5rem",
  },
  heroBody: {
    position: "relative",
    alignItems: "flex-start",
    overflowY: "auto",
    maxHeight: "calc(100vh - 64px)",
  },
}
