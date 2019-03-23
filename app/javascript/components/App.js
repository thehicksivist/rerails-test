import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './Navbar'
import Projects from './Projects'
import Blog from './Blog/Blog'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
					<div>
                        <NavBar/>
					</div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/blog" component={Blog} />
					<div>
                        FOOTER
					</div>
				</div>
            </Router>
        )
    }
}

export default App