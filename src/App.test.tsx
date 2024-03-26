import { render, screen } from '@testing-library/react';
import { Main } from './pages';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/salom/i);
  expect(linkElement).toBeInTheDocument();
});
