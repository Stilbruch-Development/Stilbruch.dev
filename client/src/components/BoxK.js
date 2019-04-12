import React, { Component } from "react";
import { connect } from "react-redux";
import FormC from "./FormC";
import FormNotification from "./FormNotification";

class BoxK extends Component {
  render() {
    return (
      <div className="myFlex navChange" id="Kontakt">
        <div className="flexHeader">Kontaktform</div>
        <div className="flexMainItems">
          {this.props.form.formSend ? <FormNotification /> : <FormC />}
        </div>
      </div>
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
