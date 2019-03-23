import React from 'react'
import Posts from './Posts'
import NewPost from './NewPost'

class PostsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormSubmit(title, picture, description){
        console.log(title, picture, description)
    }

    componentDidMount(){
        fetch('posts.json')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ posts: data }) });
    }

    render(){
        return(
          <div>
			<NewPost handleFormSubmit={this.handleFormSubmit}/>
            <Posts posts={this.state.posts} />
          </div>
        )
    }
}

export default PostsContainer