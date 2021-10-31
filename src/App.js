import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'
import HiddenMessage from './components/HiddenMessage/hiddenMessage'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={() => <Home nav={Home} />} />
				<Route
					exact
					path="/hidden"
					render={() => <HiddenMessage nav={HiddenMessage} />}
				/>
				<Route exact path="/" render={() => <Home nav={Home} />} />
				{/* <Route component={Error} /> */}
			</Switch>
		</Router>
	)
}

export default App
