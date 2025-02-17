import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import linkedin from '../img/linkedin.svg'

import logo from '../img/logo.svg'
import ashtalogo from '../img/ashtaindigo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={ashtalogo} alt="Ashtasol" style={{ width: '7em', height: '4em' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/products">
                Tech Trainings
              </Link>
              <Link className="navbar-item" to="/products">
                Tech Support
              </Link>
              <Link className="navbar-item" to="/products">
                Immigration Services
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a className="navbar-item">
                <span>
                  Ph: +91 8143 714 581
                </span>
              </a>
              <a className="navbar-item"
              href="mailto:thammanenijanardhan@gmail.com"
              >
                <span>
                Email
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://github.com/janardhan904"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/janardhanthammaneni/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={linkedin} alt="LinkedIn" />
                </span>
              </a>

            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
