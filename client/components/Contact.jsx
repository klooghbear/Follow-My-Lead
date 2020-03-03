import React from 'react';

const contactEmail = 'contact@followmylead.com';

function Contact() {
  return (
    <div>
      <h1 className="page-title">Super Speedy Contact Page!</h1>
      <div className="profile-container">
        <p className="profile-info">
          Email us at <a href="">{contactEmail}</a> and one of our doghandlers
          will be in touch!
        </p>
      </div>
    </div>
  );
}

export default Contact;
