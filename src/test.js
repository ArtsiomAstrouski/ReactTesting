import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'

describe('Test component', () => {
	it('should render', () => {
		const mockCallback = jest.fn()

		const test = render(
			<MuiThemeProvider>
				<Test handleRemove={mockCallback}>{'testLabel'}</Test>
			</MuiThemeProvider>
		)

		expect(test).toMatchSnapshot()
		const button = test.container.querySelector('button')
	})

	it('render with children', () => {
		const handler = jest.fn()

		render(<ButtonTest onClick={handler}>Some text</ButtonTest>)
		expect(screen.getByText('Some text')).toBeInTheDocument()
	})
})
expect(screen.queryByRole('button')).toBeNull()
userEvent.click(button)
expect(mockCallback).toBeCalled()
screen.debug()
