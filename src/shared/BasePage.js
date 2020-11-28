import React from 'react';
import './BasePage.css';
import Nav from './Nav';
import Welcome from './../home/Welcome';
import Timeline from './../timeline/Timeline';
import { timelineContent } from './../timeline/timelineContent';

function BasePage() {
  return (
    <>
      <Nav />
      <Welcome />
      <Timeline moments={timelineContent} />
    </>
  );
}

export default BasePage;
