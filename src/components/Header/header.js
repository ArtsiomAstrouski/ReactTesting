import { Link } from 'react-router-dom'
import React from 'react'
import styles from './style.module.css'

const Header = () => {
	return (
		<header>
			<nav>
				<ul className={styles.header}>
					<li>
						<Link className={styles.link} to="/home">
							Home
						</Link>
					</li>
					<li>
						<Link className={styles.link} to="/hidden">
							HiddenMessage
						</Link>
					</li>
					<li>
						<Link className={styles.link} to="/login">
							Login
						</Link>
					</li>
					<li>
						<Link className={styles.link} to="/search">
							Search
						</Link>
					</li>
					<li>
						<Link className={styles.link} to="/searchinput">
							SearchInput
						</Link>
					</li>
					<li>
						<Link className={styles.link} to="/material">
							Material
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
