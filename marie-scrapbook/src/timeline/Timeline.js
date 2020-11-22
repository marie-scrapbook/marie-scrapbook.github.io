import React from 'react';
import './Timeline.css';
import Moment from './Moment';

function Timeline() {
  return (
    <section className="timeline section pb-0 scrap-bkg">
      <ul className="timeline-moments">
        <Moment date="Jan 8, 1922"
                description="Born Elmhurst, Queens"
                title="Born Elmhurst, Queens"/>
      </ul>
	  </section>
  );
}

export default Timeline;
