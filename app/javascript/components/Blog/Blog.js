// this page will show all posts
// will need create, edit post pages
import React, { Component } from 'react';
import PostsContainer from './PostsContainer'
import NewPost from './NewPost'

class Blog extends Component {
	render() {
		return (
			<div>
				Posts Heading:
				<NewPost/>
				<PostsContainer/>
			</div>
			
		);
	}
}
export default Blog;