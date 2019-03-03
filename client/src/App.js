import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

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
        </div>
      </Router>
    </Provider>
  );
}
