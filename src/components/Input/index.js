import React, { useState, useEffect } from 'react'
import Header from '../Header/header'

const getUser = () => Promise.resolve({ id: 1, name: 'Yauhen' })

const Search = ({ value, onChange, children }) => (
	<div>
		<label htmlFor="search">{children}</label>
		<input
			placeholder="search text..."
			id="search"
			type="text"
			value={value}
			onChange={onChange}
			// required
		/>
	</div>
)

const Input = () => {
	const [search, setSearch] = useState('')
	const [user, setUser] = useState(null)

	useEffect(() => {
		const loadUser = async () => {
			const user = await getUser()
			setUser(user)
		}

		loadUser()
	}, [])

	const handleChange = ({ target }) => {
		setSearch(target.value)
	}

	return (
		<>
			<Header />
			{user && <h2>Logged in as {user.name}</h2>}
			<img className="img" src="" alt="search image" />
			<Search value={search} onChange={handleChange}>
				SEARCH:
			</Search>
			<p>Searches for {search ? search : '...'}</p>
		</>
	)
}

export default Input
