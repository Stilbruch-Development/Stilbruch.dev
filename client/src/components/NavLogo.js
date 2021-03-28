import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshForm } from "../actions/formActions";
import { closeNav } from "../actions/navActions";
import NavLogoSVG from "../images/styled_images/NavLogo";
import StyledLink from "./styled_components/StyledLink";

class NavLogo extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.refreshForm();
    this.props.closeNav();
  }

  render() {
    return (
      <StyledLink
        data-testid="NavLogo"
        onClick={this.handleClick}
        style={{ minWidth: "10%" }}
        to={this.props.navLink}
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
      >
        <NavLogoSVG />
      </StyledLink>
    );
  }
}

const mapStateToProps = (state) => ({
  form: state.form,
  navbar: state.navbar,
});

export default connect(mapStateToProps, { refreshForm, closeNav })(NavLogo);
