import {Component, Fragment} from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends Component {
    headerProps = {
        title: 'Cool APP',
        favorite_color: 'blue'
    }

  render() {
      return (
          <Fragment>
              <Header {...this.headerProps} />
              <Content />
              <Footer />
          </Fragment>
      );
  }
}
