import React, { Component } from "react";
import { connect } from "react-redux";
import { sendForm, formErrors, refreshForm } from "../actions/formActions";
import validateForm from "../validation/contactForm";

class FormC extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      firstName1: "",
      lastName: "",
      lastName1: "",
      email: "",
      email1: "",
      message: "",
      message1: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.refreshForm();

    const form = {
      firstName1: this.firstName1.value,
      lastName1: this.lastName1.value,
      email1: this.email1.value,
      message1: this.message1.value,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message
    };

    const validate = data => {
      const { errors, isValid } = validateForm(data);

      if (!isValid) {
        return errors;
      }
      return true;
    };

    if (validate(form) === true) {
      this.props.sendForm({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        message: form.message
      });
    } else {
      const errors = validate(form);
      this.props.formErrors(errors);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      message,
      general
    } = this.props.form.errors;
    let errorFirstName, errorLastName, errorEmail, errorMessage, errorGeneral;

    if (this.props.form.formError) {
      if (general) {
        errorGeneral = <p className="formError">{general}</p>;
      }

      if (firstName) {
        errorFirstName = <p className="formError">{firstName}</p>;
      }

      if (lastName) {
        errorLastName = <p className="formError">{lastName}</p>;
      }

      if (email) {
        errorEmail = <p className="formError">{email}</p>;
      }

      if (message) {
        errorMessage = <p className="formError">{message}</p>;
      }
    }

    return (
      <form className="navChange" id="kontakt" action="/test" method="POST">
        {/* form protection start */}

        <input
          className="formInput displayNone"
          type="text"
          name="firstName1"
          ref={c => {
            this.firstName1 = c;
          }}
          value={this.state.firstName1}
          onChange={this.handleChange}
        />

        <input
          className="formInput displayNone"
          type="text"
          name="lastName1"
          ref={c => {
            this.lastName1 = c;
          }}
          value={this.state.lastName1}
          onChange={this.handleChange}
        />

        <input
          className="formInput displayNone"
          type="email"
          name="email1"
          ref={c => {
            this.email1 = c;
          }}
          value={this.state.email1}
          onChange={this.handleChange}
        />

        <textarea
          className="formInput displayNone"
          name="message1"
          ref={c => {
            this.message1 = c;
          }}
          value={this.state.message1}
          onChange={this.handleChange}
        />

        {/* form protection end */}

        {errorGeneral}

        <input
          className="formInput"
          type="text"
          name="firstName"
          minLength="2"
          required
          placeholder="Vorname"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        {errorFirstName}

        <input
          className="formInput"
          type="text"
          name="lastName"
          minLength="2"
          required
          placeholder="Nachname"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        {errorLastName}

        <input
          className="formInput"
          type="email"
          name="email"
          required
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        {errorEmail}

        <textarea
          className="formInput"
          name="message"
          required
          placeholder="Bitte schreiben Sie hier Ihre Nachricht."
          value={this.state.message}
          onChange={this.handleChange}
        />
        {errorMessage}

        <button
          onClick={this.handleFormSubmit}
          className="button"
          type="submit"
        >
          <span>Nachricht senden</span>
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  form: state.form
});

export default connect(
  mapStateToProps,
  { sendForm, formErrors, refreshForm }
)(FormC);
