import {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Categories from './pages/Categories';

export default class App extends Component {

  render() {
      return (
          <BrowserRouter>
              <Header />
              <div className={'pt-14 w-11/12 m-auto'}>
                  <Switch>
                      <Route path={'/categories'} component={Categories} />
                      <Route path={'/movies/:id'} component={Movie} />
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
