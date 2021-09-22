import {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';

export default class App extends Component {

  render() {
      return (
          <BrowserRouter>
              <Header />
              <div className={'pt-14 w-11/12 m-auto'}>
                  <Switch>
                      <Route path={'/movies'}>
                          <Movies />
                      </Route>
                      <Route path={'/'}>
                          <Home />
                      </Route>
                  </Switch>
              </div>
              <Footer />
          </BrowserRouter>
      );
  }
}
