import React from 'react';
import { render } from '@testing-library/react';
import Moment from './Moment';

const minData = {
  "date": "2020",
  "title": "Title"
};

test('Renders correctly with minimum data', () => {
  const { container } = render(
    <Moment date={minData.date}
            description={minData.description}
            imgSrc={minData.imgSrc}
            title={minData.title}/>
  );
  expect(container.querySelector('.moment-date')).toBeInTheDocument();
  expect(container.querySelector('.moment-title')).toBeInTheDocument();
  expect(container.querySelector('.moment-description')).not.toBeInTheDocument();
  expect(container.querySelector('.moment-img')).not.toBeInTheDocument();
});

test('Renders correctly with maximum data', () => {
  const maxData = {
    ...minData,
    "description": "Description",
    "imgSrc": "filename.jpg",
  };
  const { container } = render(
    <Moment date={maxData.date}
            description={maxData.description}
            imgSrc={maxData.imgSrc}
            title={maxData.title}/>
  );
  expect(container.querySelector('.moment-date')).toBeInTheDocument();
  expect(container.querySelector('.moment-title')).toBeInTheDocument();
  expect(container.querySelector('.moment-description')).toBeInTheDocument();
  expect(container.querySelector('.moment-img')).toBeInTheDocument();
});
