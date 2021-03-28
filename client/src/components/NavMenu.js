import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshForm } from "../actions/formActions";
import { switchNav } from "../actions/navActions";
import NavCancel from "../images/styled_images/NavCancel";
import NavMenuIcon from "../images/styled_images/NavMenu";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ff0000;
  border-radius: 131px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8) 5px 10px 20px inset;
  background: rgba(0, 0, 0, 0);
  text-align: center;
  color: #ff0000;
  text-decoration: none;
  font-size: 3rem;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  min-width: 20%;
  height: 3.5rem;
  padding-bottom: 0.2vw;

  :hover {
    background: rgba(95, 95, 95, 0.7);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }

  // phone
  @media (max-width: 600px) {
    font-size: 8rem;
    min-width: 100%;
    height: 8vw;
    margin: 1vw 0 1vw 0;
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
      <Menu onClick={this.handleClick}>
        {this.props.navbar.navbarOpen === true ? (
          //
          <NavCancel />
        ) : (
          <NavMenuIcon />
        )}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  navbar: state.navbar,
});

export default connect(mapStateToProps, { refreshForm, switchNav })(NavMenu);
