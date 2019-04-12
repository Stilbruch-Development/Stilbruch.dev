import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import CookieConsent from "react-cookie-consent";
import store from "./store";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/datenschutz" component={Privacy} />
            <Route exact path="/impressum" component={Terms} />
            <Route path="/*" component={Main} />
          </Switch>
          <hr />
          <Footer />
          <CookieConsent
            acceptOnScroll
            acceptOnScrollPercentage={70}
            location="bottom"
            buttonText="Ok, stimme zu."
            cookieName="stilbruch.dev_cookie"
            debug="true"
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              borderRadius: "10px",
              boxShadow: "5px 10px 20px rgba(0,0,0, 0.8)",
              background: "rgba(24, 24, 24, 0.9)",
              textAlign: "center",
              color: "#FF0000",
              textDecoration: "none",
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem"
            }}
            buttonStyle={{
              border: "1px solid #FF0000",
              borderRadius: "10px",
              boxShadow: "5px 10px 20px rgba(0,0,0, 0.5)",
              background: "rgba(95, 95, 95, 0.3)",
              color: "rgb(255, 0, 0)",
              fontSize: "2rem",
              fontFamily: "inherit",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              outline: "none",
              fontWeight: "bold"
            }}
            expires={150}
          >
            Stilbruch.dev nutzt Cookies um die Benutzerfreundlichkeit zu
            verbessern.&nbsp;
            <Link
              style={{
                fontSize: "1.5vw",
                textDecoration: "underline",
                color: "rgb(255, 0, 0)"
              }}
              to="/datenschutz"
            >
              Infos zum Datenschutz
            </Link>
          </CookieConsent>
        </div>
      </Router>
    </Provider>
  );
}
