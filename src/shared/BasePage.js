import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './BasePage.css';
import Nav from './Nav';
import ScrapbookPage from './../scrapbook/ScrapbookPage';
import Timeline from './../timeline/Timeline';
import Welcome from './../home/Welcome';
import { timelineContent } from './../timeline/timelineContent';

function BasePage() {
  const isMobile = window.innerWidth <= 700;

  return (
    <Router>
      <Nav isMobile={isMobile} />

      {/* Home / Timeline */}
      <Route exact={true} path="/" render={() => (
        <>
          <Welcome />
          <Timeline moments={timelineContent} />
        </>
      )}/>

      {/* Scrapbook */}
      <Route path="/scrapbook/page/:index" render={({ match }) => (
        <ScrapbookPage index={match.params.index} />
      )}/>
    </Router>
  );
}

export default BasePage;
