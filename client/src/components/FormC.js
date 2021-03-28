import React, { Component } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { sendForm, formErrors, refreshForm } from "../actions/formActions";
import validateForm from "../validation/contactForm";
import Button from "./styled_components/Button";

const Fields = css`
  border: 1px solid #ff0000;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 5px 10px 20px inset;
  background: rgba(24, 24, 24, 0.5) !important;
  color: rgb(255, 0, 0) !important;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  width: 70rem;
  margin: 0.6rem;
  box-sizing: border-box;
  font-family: inherit;

  :focus {
    color: rgb(255, 0, 0);
    border: 2px solid rgb(255, 0, 0);
    outline: none;
  }
  ::placeholder {
    color: rgba(255, 0, 0, 0.9);
    text-align: center;
  }
`;

const Input = styled.input`
  ${Fields}
  font-size: 2.5rem;
  height: 4.5rem;
  padding: 0.2em 1em;
  text-align: center;

  // phone
  @media (max-width: 600px) {
    font-size: 6rem;
    height: 8.5rem;
    margin: 1rem;
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

const Textarea = styled.textarea`
  ${Fields}
  height: 15rem;
  font-size: 2rem;
  padding: 20px;
  text-align: left;

  // phone
  @media (max-width: 600px) {
    height: 30rem;
    font-size: 5rem;
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

const FormError = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(255, 0, 0);
  background: rgba(255, 0, 0, 0.2);
  border-radius: 10px;
  padding-top: 3px;
  padding-bottom: 5px;

  // phone
  @media (max-width: 600px) {
    font-size: 5rem;
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
      message1: "",
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
      message: this.state.message,
    };

    const validate = (data) => {
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
        message: form.message,
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
      firstName_error,
      lastName_error,
      email_error,
      message_error,
      general_error,
    } = this.props.form.errors;
    let errorFirstName, errorLastName, errorEmail, errorMessage, errorGeneral;

    if (this.props.form.formError) {
      if (general_error) {
        errorGeneral = (
          <FormError data-testid="General_Error">{general_error}</FormError>
        );
      }

      if (firstName_error) {
        errorFirstName = (
          <FormError data-testid="FirstName_Error">{firstName_error}</FormError>
        );
      }

      if (lastName_error) {
        errorLastName = (
          <FormError data-testid="LastName_Error">{lastName_error}</FormError>
        );
      }

      if (email_error) {
        errorEmail = (
          <FormError data-testid="Email_Error">{email_error}</FormError>
        );
      }

      if (message_error) {
        errorMessage = (
          <FormError data-testid="Message_Error">{message_error}</FormError>
        );
      }
    }

    return (
      <form
        data-testid="FormMain"
        className="navChange"
        id="kontakt"
        action="/kontakt"
        method="POST"
      >
        {/* form protection start */}
        <Input
          style={{ display: "none" }}
          type="text"
          name="firstName1"
          ref={(c) => {
            this.firstName1 = c;
          }}
          value={this.state.firstName1}
          onChange={this.handleChange}
        />
        <Input
          style={{ display: "none" }}
          type="text"
          name="lastName1"
          ref={(c) => {
            this.lastName1 = c;
          }}
          value={this.state.lastName1}
          onChange={this.handleChange}
        />
        <Input
          style={{ display: "none" }}
          type="email"
          name="email1"
          ref={(c) => {
            this.email1 = c;
          }}
          value={this.state.email1}
          onChange={this.handleChange}
          data-testid="InputEmail1"
        />
        <Textarea
          style={{ display: "none" }}
          name="message1"
          ref={(c) => {
            this.message1 = c;
          }}
          value={this.state.message1}
          onChange={this.handleChange}
        />
        {/* form protection end */}
        {errorGeneral}
        <Input
          type="text"
          name="firstName"
          minLength="2"
          required
          placeholder="Vorname"
          value={this.state.firstName}
          onChange={this.handleChange}
          data-testid="InputFirstName"
        />
        {errorFirstName}
        <Input
          type="text"
          name="lastName"
          minLength="2"
          required
          placeholder="Nachname"
          value={this.state.lastName}
          onChange={this.handleChange}
          data-testid="InputLastName"
        />
        {errorLastName}
        <Input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          data-testid="InputEmail"
        />
        {errorEmail}
        <Textarea
          name="message"
          required
          placeholder="Bitte schreibe hier deine Nachricht."
          value={this.state.message}
          onChange={this.handleChange}
          data-testid="TextareaMessage"
        />
        {errorMessage}
        <Button
          onClick={this.handleFormSubmit}
          type="submit"
          data-testid="ButtonSubmit"
        >
          <span>Nachricht senden</span>
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, { sendForm, formErrors, refreshForm })(
  FormC
);
