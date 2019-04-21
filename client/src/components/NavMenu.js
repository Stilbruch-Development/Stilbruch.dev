import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshForm } from "../actions/formActions";
import { switchNav } from "../actions/navActions";
import navMenu from "../images/navMenu.svg";
import navCancel from "../images/navCancel.svg";
import StyledLink from "./styled_components/StyledLink";

class NavMenu extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.refreshForm();
    this.props.switchNav();
  }

  render() {
    return (
      <StyledLink onClick={this.handleClick}>
        {this.props.navbar.navbarOpen === true ? (
          <img src={navCancel} alt="cancel menue" />
        ) : (
          <img src={navMenu} alt="menu" />
        )}
      </StyledLink>
    );
  }
}

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  { refreshForm, switchNav }
)(NavMenu);
