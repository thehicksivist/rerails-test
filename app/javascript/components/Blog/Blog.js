// this page will show all posts
// will need create, edit post pages
import React, { Component } from 'react';
import PostsContainer from './PostsContainer'

class Blog extends Component {
	render() {
		return (
			<div>
				Posts Heading:
				<PostsContainer/>
			</div>
			
		);
	}
}
export default Blog;