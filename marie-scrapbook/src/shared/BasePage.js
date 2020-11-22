import React from 'react';
import './BasePage.css';
import Nav from './Nav';
import Welcome from './../home/Welcome';
import Timeline from './../timeline/Timeline';

function BasePage() {
  return (
    <>
      <Nav />
      <Welcome />
      <Timeline />
    </>
  );
}

export default BasePage;
