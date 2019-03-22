import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-light navbar-fixed-top">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse justify-content-right" id="navbarNav">
						<ul className="navbar-nav right">
							<li className="nav-item active">
								<NavLink to="/" className="nav-link text-dark">
									HOME
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/projects" className="nav-link text-dark">
									PROJECTS
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/blog" className="nav-link text-dark">
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