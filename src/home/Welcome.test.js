import React from 'react';
import { render } from '@testing-library/react';
import Welcome from './Welcome';

test('Has a welcome heading', () => {
  const { getByRole } = render(<Welcome />);
  const headingElement = getByRole('heading');
  expect(headingElement).toBeInTheDocument();
});
