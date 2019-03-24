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
        this.addNewPost = this.addNewPost.bind(this)
    }

    handleFormSubmit(title, picture, description){
        let body = JSON.stringify({post: {title: title, picture: picture, description: description} })

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => {return response.json()})
            .then((post)=>{
                this.addNewPost(post)
        })
    }

    addNewPost(post){
        this.setState({
            posts: this.state.posts.concat(post)
        })
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