import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/'
import HiddenMessage from './components/HiddenMessage'
import Login from './components/Login/'
import Search from './components/Search/'
import SearchInput from './components/SearchInput/'
import Material from './components/Material/'
import Input from './components/Input'
import Scrolling from './components/Scrolling'

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
				<Route exact path="/input" render={() => <Input nav={Input} />} />
				<Route exact path="/search" render={() => <Search nav={Search} />} />
				<Route
					exact
					path="/scrolling"
					render={() => <Scrolling nav={Scrolling} />}
				/>
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
