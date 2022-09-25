import { render, screen } from '@testing-library/react';
import App from './App';
//PA Token
//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

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
