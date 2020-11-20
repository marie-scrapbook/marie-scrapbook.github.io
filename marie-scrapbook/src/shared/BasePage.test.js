import React from 'react';
import { render } from '@testing-library/react';
import BasePage from './BasePage';

test('Every page contains a Nav', () => {
  const { getByRole } = render(<BasePage />);
  const navElement = getByRole(/nav/i);
  expect(navElement).toBeInTheDocument();
});
