import React from 'react';
import './BasePage.css';
import Nav from './Nav';
import Welcome from './../home/Welcome';

function BasePage() {
  return (
    <>
      <Nav />
      <Welcome />
    </>
  );
}

export default BasePage;
