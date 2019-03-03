import React from 'react';
import LogoRadblocs from '../images/logo_radblocs.png';

export default function BoxP() {
  return (
    <div className="myFlex eGrid navChange" id="Projekte">
      <div className="flexHeader">Aktuelles Projekt</div>
      <div className="flexMainItems">
        <a className="projectImg" href="https://www.radblocs.com">
          <img src={LogoRadblocs} alt="logo" />
        </a>
      </div>
    </div>
  );
}
