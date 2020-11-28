import React from 'react';
import { render } from '@testing-library/react';
import Timeline from './Timeline';

const moment = {
  "date": "2020",
  "title": "Title"
};

test('Renders multiple moments according to data structure', () => {
  const multipleMoments = [
    moment,
    moment
  ];
  const { container } = render(<Timeline moments={multipleMoments}/>);
  expect(container.querySelectorAll('.moment').length).toBe(multipleMoments.length);
});

test('Handles empty moment param', () => {
  const noMoments = [];
  const { container } = render(<Timeline moments={noMoments}/>);
  expect(container.querySelectorAll('.moment').length).toBe(noMoments.length);
});