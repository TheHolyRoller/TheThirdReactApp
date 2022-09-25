import { render, screen } from '@testing-library/react';
import App from './App';
//PA Token
//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

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
