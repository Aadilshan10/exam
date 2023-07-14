import React from 'react';

const About = () => {
  return (
    <>
      <div className="container">
        <img
          src="https://www.traveltoindia.org/images/banner/about-us.jpg"
          className="img-fluid"
          alt="..."
        />
        <h1 style={{ fontFamily: "cursive", color: "purple", textAlign: "center" }}>
          About Us
        </h1>
        <div id="accordion">
          <div className="card">
            <div
              className="card-header"
              id="headingOne"
              style={{ backgroundColor: "#FF1493" }}
            >
              <h5>Kohinoor travels</h5>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                <p style={{ fontFamily: "sans-serif", lineHeight: "2", fontSize: "18px" }}>
                  Kohinoor travels is a renowned tour operator in India offering domestic and inbound tour services with transportation. With more than a decade of expertise in the travel industry, we are committed to providing the best assistance and experiences to our visitors. Founded in 2011, we have created thousands of travel experiences with well-crafted India Holiday Tour Packages for different groups visiting India to explore its culture and uniqueness. Our professionally managed trip plans and itineraries specialize in organizing Adventure tours, Cultural tours, Pilgrimage tours, Hill station tours, Romantic tours, and Wildlife adventure tours through a wide network of services and facilities across India. We offer 24x7 services that include travel planning, customized holiday packages, itinerary design, hotel bookings, and transportation facilities tailored to your demand and budget. For personalized family holidays, choose from our extensive car fleet, while for small groups, we offer Tempo Traveller Rental Delhi to provide premium service for airport pick-up and drop-offs, city tours, or outstation trips. For corporate tours or seminars, we offer bus rentals. Additionally, we are proud to announce our most luxurious road trip services with luxury vans and campervans, modified to offer a homely feeling while traveling.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-header"
              id="headingTwo"
              style={{ backgroundColor: "#FF8C00" }}
            >
              <h5 className="mb-0">Address</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>456 Kaloor</li>
                <li>Near jawaharlal nehru stadium,Ernakulam</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div
              className="card-header"
              id="headingFour"
              style={{ backgroundColor: "#9370DB" }}
            >
              <h5 className="mb-0">Contact Details</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>Phone: +91 9876543210</li>
                <li>Email: travel.india@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-light pb-5">
        <div className="container text-center">
          <div>
            <div>Contact Us</div>
            <div>Phone: +91 9898989898</div>
            <div>Email: Kohinoortravels@gmail.com</div>
          </div>
          <p className="font-italic text-muted mb-0">
            &copy; Copyrights KohinoorTravels.com
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default About;
