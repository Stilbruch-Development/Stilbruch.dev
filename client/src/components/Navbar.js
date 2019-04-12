import React, { Component } from "react";
import { connect } from "react-redux";
import { closeNav, switchNav } from "../actions/navActions";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

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
    console.log(this.state);
    window.addEventListener("load", function() {
      const body = document.querySelector("body");
      const navbar = document.getElementsByClassName("navbar");

      function logScroll() {
        const navBottom = navbar[0].getBoundingClientRect().bottom;

        const element = document.getElementsByClassName("navChange");
        for (let i = 0; i < element.length; i += 1) {
          const elementTop = element[i].getBoundingClientRect().top;
          const elementBottom = element[i].getBoundingClientRect().bottom;

          if (elementTop <= navBottom && elementBottom >= 0) {
            navbar[0].style.background = "rgba(24, 24, 24, 0.9)";
            break;
          }

          navbar[0].style.background = "rgba(24, 24, 24, 0)";
        }
      }

      body.onscroll = logScroll;
    });
    console.log(this.props.navbar);
    return (
      <div className="navbar sticky">
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
      </div>
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
