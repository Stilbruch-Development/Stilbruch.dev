import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { refreshForm } from '../actions/formActions';

class NavItem extends Component {
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
        className="navItem"
        to={this.props.navLink}
        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
      >
        {this.props.head}
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
)(NavItem);
