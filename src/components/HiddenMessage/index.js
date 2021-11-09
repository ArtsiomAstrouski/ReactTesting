import * as React from 'react'
import Header from '../Header/header'

export default function HiddenMessage({ children }) {
	const [showMessage, setShowMessage] = React.useState(false)

	return (
		<div>
			<Header />
			<label htmlFor="toggle">Show Message</label>
			<input
				id="toggle"
				type="checkbox"
				onChange={e => setShowMessage(e.target.checked)}
				checked={showMessage}
			/>
			{showMessage ? children : null}
		</div>
	)
}
