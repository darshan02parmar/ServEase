import React, { useState } from 'react';

const countryData = [
  {
    name: 'France',
    img: '/assets/images/c1.jpg',
    services: ['Tourist Visa', 'Business Visa', 'Travel Insurance'],
    requirements: 'Passport, Photo, Application Form, Proof of Funds',
  },
  {
    name: 'Canada',
    img: '/assets/images/c2.jpg',
    services: ['Tourist Visa', 'Study Permit', 'Work Permit'],
    requirements: 'Passport, Photo, Acceptance Letter, Proof of Funds',
  },
  {
    name: 'United States',
    img: '/assets/images/c3.jpg',
    services: ['B1/B2 Visa', 'ESTA', 'Student Visa'],
    requirements: 'Passport, DS-160, Photo, Interview Appointment',
  },
  {
    name: 'New Zealand',
    img: '/assets/images/c4.jpg',
    services: ['Visitor Visa', 'Work Visa', 'Student Visa'],
    requirements: 'Passport, Photo, Application Form, Proof of Funds',
  },
  {
    name: 'Australia',
    img: '/assets/images/c5.jpg',
    services: ['Visitor Visa', 'eVisitor', 'Working Holiday'],
    requirements: 'Passport, Photo, Application Form, Proof of Funds',
  },
  {
    name: 'Spain',
    img: '/assets/images/c6.jpg',
    services: ['Tourist Visa', 'Schengen Visa', 'Student Visa'],
    requirements: 'Passport, Photo, Application Form, Proof of Funds',
  },
];

function Countries() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${newsletterEmail}`);
    setNewsletterEmail('');
  };

  const openModal = (country) => {
    setSelectedCountry(country);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div>
      <div className="hero_bg_box">
        <div className="img-box">
          <img src="/assets/images/hero-bg.jpg" alt="Hero Background" />
        </div>
      </div>

      {/* Country Section */}
      <section className="country_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2 className="display-6 fw-bold mb-3">Choose Country</h2>
            <p className="lead text-muted mb-4">Select country you want to apply visa for</p>
          </div>
          <div className="row">
            {countryData.map((country, idx) => (
              <div className="col-md-4" key={country.name}>
                <div className="box" style={{ cursor: 'pointer' }} onClick={() => openModal(country)}>
                  <img src={country.img} alt={country.name} />
                  <div className="detail-box"><h3 className="fw-bold">{country.name}</h3></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for country details */}
      {modalOpen && selectedCountry && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.45)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{ borderRadius: 16 }}>
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{selectedCountry.name} - Services & Requirements</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <img src={selectedCountry.img} alt={selectedCountry.name} className="mb-3" style={{ width: '100%', borderRadius: 8, maxHeight: 180, objectFit: 'cover' }} />
                <h6 className="fw-bold mb-2">Available Services:</h6>
                <ul>
                  {selectedCountry.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
                <h6 className="fw-bold mt-3 mb-2">Requirements:</h6>
                <p>{selectedCountry.requirements}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-brand" onClick={() => alert('Booking flow coming soon!')}>Book Now</button>
                <button className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

     {/* Info Section */}
<section className="info_section">
  <div className="container">
    <div className="row">
      <div className="col-md-3 info_logo">
        <a className="navbar-brand" href="/">
          <span>ServEase</span>
        </a>
        <p>Your one-stop platform to discover, book, and manage a wide range of local services easily and securely.</p>
      </div>
      <div className="col-md-3 info_links">
        <h5>Useful Links</h5>
        <ul>
          <li><a href="#">Explore Services</a></li>
          <li><a href="#">Book a Service</a></li>
          <li><a href="#">FAQs & Support</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className="col-md-3 info_info">
        <h5>Contact Us</h5>
        <div className="info_contact">
          <a href="#"><i className="fa fa-map-marker"></i><span>123 Service Street, City Center</span></a>
          <a href="#"><i className="fa fa-phone"></i><span>Call : +91 9876543210</span></a>
          <a href="#"><i className="fa fa-envelope"></i><span>support@servease.com</span></a>
        </div>
      </div>
      <div className="col-md-3 info_form">
        <h5>Newsletter</h5>
        <form onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={e => setNewsletterEmail(e.target.value)}
            required
          />
          <button>Subscribe</button>
        </form>
        <div className="social_box">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Countries;
