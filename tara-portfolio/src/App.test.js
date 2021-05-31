import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tara timmerman', () => {
  render(<App />);
  const nameElement = screen.getByText(/tara timmerman/i);
  expect(nameElement).toBeInTheDocument();
});
