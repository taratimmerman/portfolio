import { render, screen } from '@testing-library/react';
import App from './App';

test('renders porject start hype', () => {
  render(<App />);
  const hypeElement = screen.getByText(/Let's do this/i);
  expect(hypeElement).toBeInTheDocument();
});
