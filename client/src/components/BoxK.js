import React, { Component } from "react";
import { connect } from "react-redux";
// import FormC from "./FormC";
// import FormNotification from "./FormNotification";
import MyFlex from "./styled_components/MyFlex";
import FlexHeader from "./styled_components/FlexHeader";
import FlexMainItem from "./styled_components/FlexMainItem";
import EmailLogo from "../images/styled_images/Email";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  // phone
  @media (max-width: 600px) {
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
  // >1800px = wide screen */
`;

class BoxK extends Component {
  render() {
    return (
      <MyFlex className="navChange" id="Kontakt">
        <FlexHeader>Kontakt</FlexHeader>
        <FlexMainItem>
          <Content data-testid="EmailLogo">
            <EmailLogo />
          </Content>
          {/* {this.props.form.formSend ? <FormNotification /> : <FormC />} */}
        </FlexMainItem>
      </MyFlex>
    );
  }
}

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, {})(BoxK);
