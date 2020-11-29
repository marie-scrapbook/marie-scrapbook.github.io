import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Nav from './Nav';

test('Each <a> has a link', () => {
  const { container, getAllByRole } = render(<Nav />);
  const links = getAllByRole('link');
  links.forEach(link => {
    expect(link).toHaveAttribute('href');
  });
  expect(container.querySelector('.navbar-toggler')).not.toBeInTheDocument();
  expect(container.querySelector('.navbar-toggler-custom-icon')).not.toBeInTheDocument();
});

test('Renders correctly for desktop screens', () => {
  const { container } = render(<Nav isMobile={false} />);
  expect(container.querySelector('.navbar-toggler')).not.toBeInTheDocument();
  expect(container.querySelector('.navbar-toggler-custom-icon')).not.toBeInTheDocument();
});

test('Renders correctly for mobile screens', () => {
  const { container } = render(<Nav isMobile={true} />);
  expect(container.querySelector('.navbar-toggler')).toBeInTheDocument();
  expect(container.querySelector('.navbar-toggler-custom-icon')).toBeInTheDocument();
});

test('Shows nav links on navbar toggler click', () => {
  const { container } = render(<Nav isMobile={true} />);
  expect(container.querySelector('.nav-link-list')).not.toHaveClass('show');
  // Expect all nav links to be visible after clicking toggler
  fireEvent.click(container.querySelector('.navbar-toggler'));
  expect(container.querySelector('.nav-link-list')).toHaveClass('show');
  // Expect all nav links to be hidden after clicking toggler again
  fireEvent.click(container.querySelector('.navbar-toggler'));
  expect(container.querySelector('.nav-link-list')).not.toHaveClass('show');
});
