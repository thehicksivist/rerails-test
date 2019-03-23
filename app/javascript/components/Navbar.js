import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav>
				<div>
					<div>
						<ul>
							<li>
								<NavLink to="/">
									HOME
								</NavLink>
							</li>
							<li>
								<NavLink to="/projects">
									PROJECTS
								</NavLink>
							</li>
							<li>
								<NavLink to="/blog">
									BLOG
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
export default Navbar;