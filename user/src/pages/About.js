import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Hero Background */}
      <div className="hero_bg_box">
        <div className="img-box">
          <img src="/assets/images/hero-bg.jpg" alt="Hero Background" />
        </div>
      </div>

      {/* About Section */}
      <section className="about_section layout_padding" style={{ background: 'linear-gradient(120deg, #d0f0ff 0%, #b2dfdb 40%, #a5d6a7 80%, #ffffff 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Image Side */}
            <div className="col-lg-6 px-0 mb-4 mb-lg-0">
              <div className="img_container">
                <div className="img-box rounded-4 shadow">
                  <img src="https://img.freepik.com/premium-photo/male-hands-typing-computer-keyboard-service-concept_220873-10436.jpg" alt="Project" style={{ width: '100%', borderRadius: '1.5rem' }} />
                </div>
              </div>
            </div>
            {/* Text Side */}
            <div className="col-lg-6 px-0">
              <div className="detail-box p-4 rounded-4 shadow-lg" style={{ background: 'rgba(255,255,255,0.85)', minHeight: 350 }}>
                <div className="heading_container mb-3">
                  <h2 className="display-6 fw-bold mb-2">Who Are We?</h2>
                </div>
                <p className="mb-3" style={{ fontSize: '1.1rem', color: '#333' }}>
                  <span style={{ fontWeight: 600, color: '#28a745' }}>Service Booking Platform:</span> Your one-stop solution for discovering and booking a wide range of services, from travel and wellness to local experiences and more.
                </p>
                <p className="mb-4" style={{ color: '#555' }}>
                  Our project is designed to make your life easier by connecting you with trusted service providers. Enjoy seamless booking, transparent pricing, and top-notch customer support.
                  {showMore && (
                    <span> <br />We are constantly adding new features and services to enhance your experience. Whether you're planning a trip, looking for a class, or need a local service, our platform is here to help you every step of the way.</span>
                  )}
                </p>
                <div className="btn-box mb-3">
                  <button className="btn btn-brand rounded-3 px-4 py-2" onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show Less' : 'Read More'}
                  </button>
                </div>
               
                <div className="row text-center mt-4">
                  <div className="col-4">
                    <i className="fa fa-calendar-check-o fa-2x text-brand mb-2"></i>
                    <div style={{ fontWeight: 600 }}>Easy Booking</div>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-thumbs-up fa-2x text-brand mb-2"></i>
                    <div style={{ fontWeight: 600 }}>Trusted Providers</div>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-headphones fa-2x text-brand mb-2"></i>
                    <div style={{ fontWeight: 600 }}>24/7 Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="row mt-5 justify-content-center">
            <div className="col-md-8 text-center">
              <div className="p-4 rounded-4 shadow" style={{ background: '#8eec69', color: '#fff' }}>
                <h4 className="fw-bold mb-2">Ready to experience the best services?</h4>
                <p className="mb-3">Contact us today or explore our services to get started!</p>
                <a href="/contact" className="btn btn-light btn-lg px-4 py-2 rounded-3 fw-bold">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;