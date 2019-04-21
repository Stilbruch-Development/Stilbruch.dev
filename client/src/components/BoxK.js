import React, { Component } from "react";
import { connect } from "react-redux";
import FormC from "./FormC";
import FormNotification from "./FormNotification";
import MyFlex from "./styled_components/MyFlex";
import FlexHeader from "./styled_components/FlexHeader";
import FlexMainItem from "./styled_components/FlexMainItem";

class BoxK extends Component {
  render() {
    return (
      <MyFlex className="navChange" id="Kontakt">
        <FlexHeader>Kontaktform</FlexHeader>
        <FlexMainItem>
          {this.props.form.formSend ? <FormNotification /> : <FormC />}
        </FlexMainItem>
      </MyFlex>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form
});

export default connect(
  mapStateToProps,
  {}
)(BoxK);
