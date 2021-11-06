import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/hidden">HiddenMessage</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
					<li>
						<Link to="/searchinput">SearchInput</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
