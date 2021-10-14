import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './BasePage.css';
import Nav from './Nav';
import ScrapbookPage from './../scrapbook/ScrapbookPage';
import Timeline from './../timeline/Timeline';
import Welcome from './../home/Welcome';
import { timelineContent } from './../constants/timelineContent';
import TimelinePagination from '../scrapbook/TimelinePagination';

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

      {/* Timeline */}
      <Route path="/timeline" render={() => (
        <Timeline moments={timelineContent} />
      )}/>

      {/* Scrapbook */}
      <Route path="/scrapbook/page/:index" render={({ match }) => (
        <div class="d-flex">
          {!isMobile && <TimelinePagination />}
          <ScrapbookPage index={match.params.index} />
        </div>
      )}/>

      {/* Autographs */}
      <Route path="/autographs/page/:index" render={({ match }) => (
        <div class="d-flex">
          <ScrapbookPage index={match.params.index} isAutograph={true} />
        </div>
      )}/>
    </Router>
  );
}

export default BasePage;
