import React, { Component } from "react";
import { connect } from "react-redux";
import { closeNav, switchNav } from "../actions/navActions";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import styled from "styled-components";

const NavMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.7rem 0.7rem 0.7rem 0.7rem;
  z-index: 1;
  position: sticky;
  top: 0;

  // phone
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    padding: 1vw 15vw 1vw 15vw;
  }
  // tablet portrait
  @media (max-width: 900px) {
  }
  // tablet landscape
  @media (max-width: 1200px) {
  }
  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;

class Navbar extends Component {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);

    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 600) {
      this.state = { mobileView: false };
    } else {
      this.state = { mobileView: true };
    }
  }

  handleResize = e => {
    var timeout;
    var viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    // If timer is null, reset it to 66ms and run your functions.
    // Otherwise, wait until timer is cleared
    if (!timeout) {
      timeout = setTimeout(() => {
        // Reset timeout
        timeout = null;

        // Run our resize functions
        if (viewportWidth > 600) {
          this.setState({ mobileView: false });
          this.props.closeNav();
        } else {
          this.setState({ mobileView: true });
        }
      }, 66);
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    window.addEventListener("load", function() {
      const body = document.querySelector("body");
      const navbar = document.querySelector(NavMain);

      function logScroll() {
        const navBottom = navbar.getBoundingClientRect().bottom;

        const element = document.getElementsByClassName("navChange");
        for (let i = 0; i < element.length; i += 1) {
          const elementTop = element[i].getBoundingClientRect().top;
          const elementBottom = element[i].getBoundingClientRect().bottom;

          if (elementTop <= navBottom && elementBottom >= 0) {
            navbar.style.background = "rgba(24, 24, 24, 0.9)";
            break;
          }

          navbar.style.background = "rgba(24, 24, 24, 0)";
        }
      }

      body.onscroll = logScroll;
    });
    return (
      <NavMain>
        {this.state.mobileView === false ||
        this.props.navbar.navbarOpen === true ? (
          <NavLogo navLink="/#Start" />
        ) : null}
        {this.state.mobileView === false ||
        this.props.navbar.navbarOpen === true ? (
          <NavItem head="Entwicklung" navLink="/#Entwicklung" />
        ) : null}
        {this.state.mobileView === false ||
        this.props.navbar.navbarOpen === true ? (
          <NavItem head="Projekte" navLink="/#Projekte" />
        ) : null}
        {this.state.mobileView === false ||
        this.props.navbar.navbarOpen === true ? (
          <NavItem head="Story" navLink="/#Story" />
        ) : null}
        {this.state.mobileView === false ||
        this.props.navbar.navbarOpen === true ? (
          <NavItem head="Kontakt" navLink="/#Kontakt" />
        ) : null}
        {this.state.mobileView && <NavMenu />}
      </NavMain>
    );
  }
}

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  { switchNav, closeNav }
)(Navbar);
