import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class NavItem extends Component {
  render() {
    return (
      <Link
        className="navItem"
        to={this.props.navLink}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
      >
        {this.props.head}
      </Link>
    );
  }
}
