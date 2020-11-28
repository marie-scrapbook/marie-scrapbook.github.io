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
          <div className="col-md-8 col-sm-12">
            <p className="welcome-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id imperdiet ante.
              Nulla at vulputate dui. Suspendisse commodo nunc massa, at gravida metus imperdiet id.
              Sed et mauris arcu. Donec libero felis, rutrum eu tellus eget, vulputate pharetra ante.
              Sed sed posuere sapien, at dapibus libero. Nulla felis velit, venenatis tempus placerat vitae,
              dictum in arcu. Vivamus viverra, mi nec pulvinar fermentum, nunc risus mollis lorem, nec efficitur
              velit diam ultricies dolor. Nulla ultrices rutrum tellus, quis elementum elit molestie et.
              Vivamus vestibulum, diam non euismod semper, ligula augue sagittis neque, et blandit neque ipsum nec
              diam. Pellentesque eu convallis enim. Fusce suscipit nibh vel lectus ultricies,
              a maximus nibh tristique.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id imperdiet ante.
              Nulla at vulputate dui. Suspendisse commodo nunc massa, at gravida metus imperdiet id.
              Sed et mauris arcu. Donec libero felis, rutrum eu tellus eget, vulputate pharetra ante.
              Sed sed posuere sapien, at dapibus libero. Nulla felis velit, venenatis tempus placerat vitae,
              dictum in arcu. Vivamus viverra, mi nec pulvinar fermentum, nunc risus mollis lorem, nec efficitur
              velit diam ultricies dolor. Nulla ultrices rutrum tellus, quis elementum elit molestie et.
              Vivamus vestibulum, diam non euismod semper, ligula augue sagittis neque, et blandit neque ipsum nec
              diam. Pellentesque eu convallis enim. Fusce suscipit nibh vel lectus ultricies,
              a maximus nibh tristique.
            </p>
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
