import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('App component', () => {
	test('it displays a list of users', async () => {
		render(<App />)

		const userList = await waitFor(() => screen.getByTestId('user-list'))
		expect(userList).toBeInTheDocument()
	})
})

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
