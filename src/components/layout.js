import React from "react"
import { Link } from "gatsby"
import "./mystyles.scss"
import "typeface-montserrat-alternates"

export default function Layout({ children }) {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                Johan Altamar
              </Link>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroA"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <Link className="navbar-item is-active" to="/">
                  Home
                </Link>
                <Link className="navbar-item" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
      <div className="hero-foot">
      </div> 
    </section>
  )
}
