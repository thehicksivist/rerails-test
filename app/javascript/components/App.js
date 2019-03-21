import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
					<div>
                        HEADER
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