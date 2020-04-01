import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Cookies from "universal-cookie";
import CookieBanner from "./components/CookieBanner";
import ReactGA from "react-ga";
import store from "./store";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import GlobalStyle from "./components/styled_components/GlobalStyle";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCookieBanner: true
    };
    this.setCookies = this.setCookies.bind(this);
    this.checkCookie = this.checkCookie.bind(this);
    this.closeCookieBanner = this.closeCookieBanner.bind(this);
  }

  setCookies() {
    //Accept_Cookies_Stilbruch.dev Cookie
    const cookies = new Cookies();
    cookies.set("Accept_Cookies_VisionX", true, {
      path: "/",
      maxAge: 15768000
    });

    //Google Analytics Cookies
    ReactGA.initialize("UA-162433404-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  checkCookie() {
    const cookies = new Cookies();
    const acceptCookie = cookies.get("Accept_Cookies_VisionX");
    return acceptCookie;
  }

  componentDidMount() {
    const checkCookie = this.checkCookie();
    checkCookie && this.setState({ showCookieBanner: false });
  }

  closeCookieBanner() {
    this.setState({ showCookieBanner: false });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div data-testid="AppComponent">
            <GlobalStyle />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/datenschutz" component={Privacy} />
              <Route exact path="/impressum" component={Terms} />
              <Route path="/*" component={Main} />
            </Switch>
            <hr />
            <Footer />
            {this.state.showCookieBanner && (
              <CookieBanner
                setCookies={this.setCookies}
                closeCookieBanner={this.closeCookieBanner}
              />
            )}
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
