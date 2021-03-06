import React, { useState } from 'react'
import Header from '../Header/header'

const Search = ({ value, onChange, children }) => (
	<div>
		<label htmlFor="search">{children}</label>
		<input
			placeholder="search text..."
			id="search"
			type="text"
			value={value}
			onChange={onChange}
		/>
	</div>
)

const SearchApp = () => {
	const [search, setSearch] = useState('')

	const handleChange = ({ target }) => {
		setSearch(target.value)
	}

	return (
		<>
			<Header />
			<div>
				<img src="" alt="search image" />
				<Search value={search} onChange={handleChange}>
					SEARCH:
				</Search>
				<p>Searches for {search ? search : '...'}</p>
			</div>
		</>
	)
}

export default SearchApp
