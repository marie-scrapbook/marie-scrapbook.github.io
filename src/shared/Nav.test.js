import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';

test('Each <a> has a link', () => {
  const { getAllByRole } = render(<Nav />);
  const links = getAllByRole('link');
  links.forEach(link => {
    expect(link).toHaveAttribute('href');
  });
});
