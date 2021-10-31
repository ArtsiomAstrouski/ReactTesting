import { render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
	test('it renders', () => {
		render(<App />)
	})
})

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
