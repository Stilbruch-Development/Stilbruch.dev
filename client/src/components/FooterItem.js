import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class FooterItem extends Component {
  render() {
    return (
      <Link
        to={this.props.link}
        scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })}
        className="footerItem"
      >
        {this.props.head}
      </Link>
    );
  }
}
