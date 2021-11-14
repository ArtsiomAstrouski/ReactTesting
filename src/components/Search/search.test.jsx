import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchApp from './index'

describe('App', () => {
	it('renders App component', () => {
		render(<SearchApp />)
		expect(screen.getByText(/Search:/i)).toBeInTheDocument()
		expect(screen.getByRole('textbox')).toBeInTheDocument()
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
		expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument()
		expect(screen.getByAltText('search image')).toBeInTheDocument()
		expect(screen.getByDisplayValue('')).toBeInTheDocument()
	})
})
