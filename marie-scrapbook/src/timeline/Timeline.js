import React from 'react';
import './Timeline.css';
import Moment from './Moment';

/**
 * Timeline
 * @param {Object[]} moments - Required. Array of objects of `Moment` data.
 */
function Timeline(props) {
  const formattedMoments = props.moments.map(moment => (
    <Moment date={moment.date}
            description={moment.description}
            imgSrc={moment.imgSrc}
            title={moment.title}/>
  ));

  return (
    <section className="timeline section pb-0 scrap-bkg" id="timeline">
      <ul className="timeline-moments">
        {formattedMoments}
      </ul>
	  </section>
  );
}

export default Timeline;
