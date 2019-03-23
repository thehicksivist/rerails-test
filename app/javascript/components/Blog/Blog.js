// this page will show all posts
// will need create, edit post pages
import React, { Component } from 'react';
import Posts from './Posts'

class Blog extends Component {
	render() {
		return (
			<div>
				Posts Heading:
				<Posts/>
			</div>
			
		);
	}
}
export default Blog;