import React from 'react'
import Post from './Post'

const Posts = (props) => {
    let posts = props.posts.map((post) => {
        return(
            <div key={post.id}>
                <Post post={post}/>
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