import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshForm } from "../actions/formActions";

class FormNotification extends Component {
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
      <div className="formSend">
        <div>
          <p style={{ marginBottom: "0.5rem" }}>
            {" "}
            Nachricht wurde gesendet, vielen Dank!
          </p>
        </div>
        <button
          onClick={this.handleClick}
          className="button buttonBack"
          type="button"
        >
          <span>Zurück zur Kontaktform</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form
});

export default connect(
  mapStateToProps,
  { refreshForm }
)(FormNotification);
