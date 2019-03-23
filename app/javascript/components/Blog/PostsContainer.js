import React from 'react'
import Posts from './Posts'

class PostsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        fetch('posts.json')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ posts: data }) });
    }

    render(){
        return(
          <div>
            <Posts posts={this.state.posts} />
          </div>
        )
    }
}

export default PostsContainer