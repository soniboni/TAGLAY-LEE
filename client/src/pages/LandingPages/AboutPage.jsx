import React from 'react';

function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">About</p>
        <h1>Building a calm space for sharp frontend practice.</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae aliquam ullamcorper
          suspendisse sed, libero aenean mauris egestas vel integer nunc nunc.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="feature-icon">UX</div>
          <h3>Design first</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit urna, feugiat at orci
            sollicitudin semper.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">DX</div>
          <h3>Developer friendly</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu dictum viverra dignissim
            purus lacus.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">QA</div>
          <h3>Quality obsessed</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque sed feugiat
            mattis neque.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-row">
          <strong>2024</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo id enim
            et laoreet, posuere odio.
          </p>
        </div>
        <div className="timeline-row">
          <strong>2025</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet lectus gravida
            ultricies tristique eget amet.
          </p>
        </div>
        <div className="timeline-row">
          <strong>Today</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit massa porttitor aenean
            nibh faucibus scelerisque.
          </p>
        </div>
      </div>

      <div className="cta-banner">
        <h3>Get the next drop.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra interdum vel volutpat in
          molestie mauris quis.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
