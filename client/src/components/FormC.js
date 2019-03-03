import React, { Component } from 'react';

export default class FormC extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  render() {
    return (
      <form className="navChange" id="kontakt" action="/test" method="POST">
        {/* form protection start */}

        <input className="formInput displayNone" type="text" name="firstName1" />

        <input className="formInput displayNone" type="text" name="lastName1" />

        <input className="formInput displayNone" type="email" name="email1" />

        <textarea className="formInput displayNone" name="message1" />

        {/* form protection end */}

        <input className="formInput" type="text" name="firstName" minLength="2" required placeholder="Vorname" />

        <input className="formInput" type="text" name="lastName" minLength="2" required placeholder="Nachname" />

        <input className="formInput" type="email" name="email" required placeholder="Email" />

        <textarea
          className="formInput"
          name="message"
          required
          placeholder="Bitte schreiben Sie hier Ihre Nachricht."
        />

        <button className="button primary" type="submit">
          <span>Nachricht senden</span>
        </button>
      </form>
    );
  }
}
