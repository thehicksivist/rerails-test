import React from 'react'

const Posts = (props) => {
    let posts = props.posts.map((post) => {
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

export default Posts