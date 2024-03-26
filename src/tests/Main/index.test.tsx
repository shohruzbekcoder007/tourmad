import { render, screen } from '@testing-library/react';
import { Main } from '../../pages';

test('Main page test', () => {
  render(<Main />);
  const linkElement = screen.getByText(/salom/i);
  expect(linkElement).toBeInTheDocument();
});