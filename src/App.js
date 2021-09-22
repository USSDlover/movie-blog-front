import {Component, Fragment} from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.onPostsChange = this.onPostsChange.bind(this);
        this.state = {posts: []};
    }

    onPostsChange = (posts) => {
        this.setState({posts});
    }

    headerProps = {
        title: 'Cool APP',
        favorite_color: 'blue'
    }

  render() {
      return (
          <Fragment>
              <Header {...this.headerProps}
                      posts={this.state.posts}
                      onPostsChange={this.onPostsChange}/>
              <Content onPostsChange={this.onPostsChange}/>
              <Footer />
          </Fragment>
      );
  }
}
