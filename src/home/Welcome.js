import React from 'react';
import './Welcome.css';
import welcomeImg from './assets/roxy.png';

function Welcome() {
  return (
    <section className="welcome">
      <div className="container">
        <div className="row">
          <h2 className="welcome-header">
            Road to the Roxy
          </h2>
        </div>
        <div className="row">
          <div className="welcome-text col-md-8 col-sm-12">
            <p>Hi Irwins,</p>
            <p>
              For the past 6 months, my family and I have been using some of our quarantine time to digitize Grandma's dancing scrapbook. In the 1970s, my mom helped Grandma put together a scrapbook of photos, ticket stubs, and newspaper clippings related to her dancing career. In 2008, my dad sat down with Grandma to record her memories as they flipped through the pages. And in 2020, we finally got the VHS tape converted, cut the audio clips, scanned the pages and pieces we had, and my mom and I worked on designing a timeline and scrapbook page website to bring everything together.
            </p>
            <p>
              There's nothing like hearing Grandma's story told in her own words. Getting to know her a little better through this website has been a really special experience, and I'm so happy to finally be able to share it with you all.
            </p>
            <p>I will continue updating and adding to the website, so if you have anything to add– or bug reports to file!– please let me know.</p>
            <p>With love,<br/>Tarin</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <img className="welcome-img" src={welcomeImg} alt=""/>
          </div>
        </div>
      </div>
	  </section>
  );
}

export default Welcome;
