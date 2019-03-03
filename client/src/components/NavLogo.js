import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import tImage from '../images/t.svg';

export default class NavLogo extends Component {
  render() {
    return (
      <Link
        className="navItem navLogo"
        to={this.props.navLink}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
      >
        <img src={tImage} alt="logo" />
      </Link>
    );
  }
}
