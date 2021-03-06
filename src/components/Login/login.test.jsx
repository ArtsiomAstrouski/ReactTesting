import { setupServer } from 'msw/node'
import { render, fireEvent, screen } from '@testing-library/react'
import Login from './index'

const fakeUserResponse = { token: 'fake_user_token' }
const server = setupServer(
	it.post('/api/login', (req, res, ctx) => {
		return res(ctx.json(fakeUserResponse))
	})
)

beforeAll(() => server.listen())
afterEach(() => {
	server.resetHandlers()
	window.localStorage.removeItem('token')
})
afterAll(() => server.close())

test('allows the user to login successfully', async () => {
	render(<Login />)

	// fill out the form
	fireEvent.change(screen.getByLabelText(/username/i), {
		target: { value: 'chuck' },
	})
	fireEvent.change(screen.getByLabelText(/password/i), {
		target: { value: 'norris' },
	})

	fireEvent.click(screen.getByText(/submit/i))

	const alert = await screen.findByRole('alert')

	// .toHaveTextContent() comes from jest-dom's assertions
	expect(alert).toHaveTextContent(/congrats/i)
	expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
})

test('handles server exceptions', async () => {
	// mock the server error response for this test suite only.
	server.use(
		it.post('/api/login', (req, res, ctx) => {
			return res(
				ctx.status(500),
				ctx.json({ message: 'Internal server error' })
			)
		})
	)

	render(<Login />)

	fireEvent.change(screen.getByLabelText(/username/i), {
		target: { value: 'chuck' },
	})
	fireEvent.change(screen.getByLabelText(/password/i), {
		target: { value: 'norris' },
	})

	fireEvent.click(screen.getByText(/submit/i))

	const alert = await screen.findByRole('alert')

	expect(alert).toHaveTextContent(/internal server error/i)
	expect(window.localStorage.getItem('token')).toBeNull()
})
