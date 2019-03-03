import React, { Component } from 'react';
import FooterLogo from './FooterLogo';
import FooterItem from './FooterItem';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FooterLogo link="/#Start" />
        <FooterItem head="Kontakt │" link="/#Kontakt" />
        <FooterItem head="Datenschutz │" link="/datenschutz/#top" />
        <FooterItem head="Impressum" link="/impressum/#top" />
      </div>
    );
  }
}
