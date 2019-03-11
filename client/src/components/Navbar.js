import React, { Component } from 'react';
import NavItem from './NavItem';
import NavLogo from './NavLogo';

class Navbar extends Component {
  render() {
    window.addEventListener('load', function() {
      const body = document.querySelector('body');
      const navbar = document.getElementsByClassName('navbar');

      function logScroll() {
        const navBottom = navbar[0].getBoundingClientRect().bottom;

        const element = document.getElementsByClassName('navChange');
        for (let i = 0; i < element.length; i += 1) {
          const elementTop = element[i].getBoundingClientRect().top;
          const elementBottom = element[i].getBoundingClientRect().bottom;

          if (elementTop <= navBottom && elementBottom >= 0) {
            navbar[0].style.background = 'rgba(24, 24, 24, 0.9)';
            break;
          }

          navbar[0].style.background = 'rgba(24, 24, 24, 0)';
        }
      }

      body.onscroll = logScroll;
    });

    return (
      <div className="navbar sticky">
        <NavLogo navLink="/#Start" />
        <NavItem head="Entwicklung" navLink="/#Entwicklung" />
        <NavItem head="Projekte" navLink="/#Projekte" />
        <NavItem head="Story" navLink="/#Story" />
        <NavItem head="Kontakt" navLink="/#Kontakt" />
      </div>
    );
  }
}

export default Navbar;
