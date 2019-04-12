import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";
import { refreshForm } from "../actions/formActions";
import { closeNav } from "../actions/navActions";

class NavItem extends Component {
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
      <Link
        onClick={this.handleClick}
        className="navItem"
        to={this.props.navLink}
        scroll={el =>
          el.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      >
        {this.props.head}
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form,
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  { refreshForm, closeNav }
)(NavItem);
