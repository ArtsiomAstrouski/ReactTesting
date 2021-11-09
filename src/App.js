import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/home'
import HiddenMessage from './components/HiddenMessage/hiddenMessage'
import Login from './components/Login/login'
import Search from './components/Search/search'
import SearchInput from './components/SearchInput/searchInput'
import Material from './components/Material/index'

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
				<Route exact path="/home" render={() => <Home nav={Home} />} />
				<Route exact path="/login" render={() => <Login nav={Login} />} />
				<Route
					exact
					path="/material"
					render={() => <Material nav={Material} />}
				/>
				<Route exact path="/search" render={() => <Search nav={Search} />} />
				<Route
					exact
					path="/searchinput"
					render={() => <SearchInput nav={SearchInput} />}
				/>
				{/* <Route component={Error} /> */}
			</Switch>
		</Router>
	)
}

export default App
