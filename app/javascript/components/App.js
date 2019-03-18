import React from 'react'
import Router from 'react-router'


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
					<div>
						<Header className="navbar-fixed-top" />
					</div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/blog" component={Blog} />
					<div>
						<Footer />
					</div>
				</div>
            </Router>
        )
    }
}

export default App