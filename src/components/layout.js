import React, { useState } from "react"
import { Link } from "gatsby"
import "./styles/bulmaVariables.scss"
import "./styles/layout.css"

export default function Layout({ children }) {
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
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand" style={style.navbarBrand}>
              <Link
                id="brand-name"
                className="navbar-item"
                to="/"
                // style={style.brandName}
              >
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
                <Link
                  className="navbar-item"
                  to="/portfolio"
                  activeClassName="is-active"
                >
                  Portfolio
                </Link>
                <Link
                  className="navbar-item"
                  to="/blog"
                  activeClassName="is-active"
                >
                  Blog
                </Link>
                <Link
                  className="navbar-item"
                  to="/contact"
                  activeClassName="is-active"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body" style={style.heroBody}>
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
