import React from 'react'

class Posts extends React.Component {

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
        let posts = this.state.posts.map((post) => {
            return(
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.picture}</p>
                    <p>{post.description}</p>
                </div>
            )
        })
        return(
            <div>
                {posts}
            </div>
        )
       }
}

export default Posts