import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Bharatiya Open Volunteer Association (BOVA)</h1><br></br>
      <h2>Connecting Minds, Empowering Lives!</h2>
      <p className="intro">
        We are a Section 8 company registered with the Ministry of Corporate Affairs, Government of India, dedicated to empowering communities through various initiatives.
      </p>

      <h3>Our Focus Areas</h3>
      <div className="card-container">
        <div className="card">
          <h4>Language Exchanges</h4>
          <p>Promoting cultural understanding through language learning and exchanges.</p>
          <p><strong>Get Involved:</strong> Join our classes or become a language buddy!</p>
        </div>
        <div className="card">
          <h4>Social Services</h4>
          <p>Providing essential services to uplift our communities.</p>
          <p><strong>Get Involved:</strong> Volunteer, donate, or partner with us!</p>
        </div>
        <div className="card">
          <h4>Computer Literacy</h4>
          <p>Empowering individuals with vital computer skills and cyber safety.</p>
          <p><strong>Get Involved:</strong> Attend workshops or volunteer as a trainer!</p>
        </div>
        <div className="card">
          <h4>Natural Calamities Training</h4>
          <p>Equipping communities with disaster preparedness skills.</p>
          <p><strong>Get Involved:</strong> Join training sessions or support our efforts!</p>
        </div>
        <div className="card">
          <h4>Psycho-social Support</h4>
          <p>Providing psychological support and essential skills training.</p>
          <p><strong>Get Involved:</strong> Access our services or volunteer as a counselor!</p>
        </div>
        <div className="card">
          <h4>Sustainability Awareness</h4>
          <p>Raising awareness about environmental sustainability.</p>
          <p><strong>Get Involved:</strong> Participate in green events or advocate for sustainability!</p>
        </div>
      </div>

      <h3>Join Us in Making a Difference!</h3>
      <p>Your support can transform lives! Here’s how you can help:</p>
      <ul>
       <p>Volunteer your time and skills.</p> 
        <p>Donate to support our programs.</p>
        <p>Spread the word about our initiatives.</p>
      </ul>

      <h3>Contact Us</h3>
      <p>
        For more information, visit <a href="http://www.ova.ngo" target="_blank" rel="noopener noreferrer">www.ova.ngo</a> or email <a href="mailto:contact@ova.ngo">contact@ova.ngo</a>.
      </p>
      <p>Phone: +91-8484001324</p>
      <p>Thank you for considering a partnership with BOVA. Together, we can empower lives!</p>
    </div>
  );
}

export default AboutUs;
