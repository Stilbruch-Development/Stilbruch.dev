import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormC from './FormC';
import { sendForm } from '../actions/formActions';

class BoxK extends Component {
  render() {
    return (
      <div className="myFlex eGrid navChange" id="Kontakt">
        <div className="flexHeader">Kontaktform</div>
        <div className="flexMainItems">
          <FormC />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  formSend: state.formSend,
});

export default connect(
  mapStateToProps,
  { sendForm }
)(BoxK);
