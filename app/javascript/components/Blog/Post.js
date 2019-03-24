import React from 'react'

class Post extends React.Component{
  
    render(){
        return(
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.picture}</p>
                <p>{this.props.post.description}</p>
            </div>
        )      
    }
}

export default Post