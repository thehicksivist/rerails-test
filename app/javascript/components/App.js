import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './Navbar'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
					<div>
                        <NavBar/>
					</div>
                        <Route exact path="/" component={Home} />
                        PROJECTS | BLOG
					<div>
                        FOOTER
					</div>
				</div>
            </Router>
        )
    }
}

export default App