import {Component} from 'react';

export default class Content extends Component {
    state = {posts: []};

    onFetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(fetchResponse => fetchResponse.json())
            .then(json => {
                this.setState({posts: json});
            });
    }

    onItemClick = (id) => {
        console.log('Item clicked', id);
    }

    render() {
        return (
            <div className={'w-full h-full max-h-full text-blue-100 bg-blue-800 pt-12 pb-10'}>
                <h2>Fetch posts using state to store it</h2>
                <br />
                <span className={'text-gray-200'}>{this.state.posts.length} posts fetched</span>
                <br />
                <button onClick={this.onFetchPosts} className={'bg-purple-900 text-purple-300 p-2 border-r-2'}>Fetch Data</button>
                <hr />
                <div className={'w-full max-h-full overflow-x-auto'}>
                    <ul className={'bg-blue-800 pb-10'}>
                        {
                            this.state.posts.map(post => {
                                return (
                                    <li onClick={() => this.onItemClick(post.id)} key={post.id}>
                                        {post.title}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}