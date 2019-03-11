import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { refreshForm } from '../actions/formActions';
import tImage from '../images/t.svg';

class NavLogo extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.refreshForm();
  }

  render() {
    return (
      <Link
        onClick={this.handleClick}
        className="navItem navLogo"
        to={this.props.navLink}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
      >
        <img src={tImage} alt="logo" />
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form,
});

export default connect(
  mapStateToProps,
  { refreshForm }
)(NavLogo);
