import { Typography } from "@material-tailwind/react";
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";

import '../assets/styles/HomePage.css';
import image from '../assets/images/hotel.jpg'
import { Link } from "react-router-dom";

const HotelBooking = () => (
  <>
    <NavigationMenu />
    <section className="hotel-book-section">
      <div className="service-container">
        <div className="content-container">
          <div className="image-container">
            <img src={image} />
          </div>
        </div>
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              Kenya Bush Safaris
            </Typography>
            <br />
            <Typography className="font-poppins">
              Welcome to Kenya which is known for being the world’s best
              safari destination with more than 50 epic national parks
              and reserves that are home to diverse wildlife including the big five.
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to="/kenya">Explore</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              Kenya Coastal Beaches
            </Typography>
            <br />
            <Typography className="font-poppins">
              Kenyan coast has been ranked among the best and sought-after
              destinations within the region for several years consecutively
              and has won Africa’s leading beach destination by the world travel awards
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to="/coast">Explore</Link>
            </button>
          </div>
        </div>
        <div className="content-container">
          <div className="image-container">
            <img src={image} />
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="content-container">
          <div className="image-container">
            <img src={image} />
          </div>
        </div>
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              Zanzibar Tours
            </Typography>
            <br />
            <Typography className="font-poppins">
              Discover the best of Zanzibar in just a few days!
              Our Zanzibar day tours offer a perfect opportunity to explore
              the islands breathtaking landscapes, exotic beaches, famous spice farms,
              history and diverse wildlife and culture.
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to="/zanzibar">
                Explore
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              Rwanda/Uganda Gorilla tracking
            </Typography>
            <br />
            <Typography className="font-poppins">
              We plan for our client’s holiday to Rwanda/Uganda to
              experience and see gorillas in their natural habitats.
              Let your imagination and adventurous side run wild
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to="/rwanda-uganda">Explore</Link>
            </button>
          </div>
        </div>
        <div className="content-container">
          <div className="image-container">
            <img src={image} />
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="content-container">
          <div className="image-container">
            <img src={image} />
          </div>
        </div>
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              International Tours
            </Typography>
            <br />
            <Typography className="font-poppins">
              We have partnered with other tour companies in various
              countries to enable our Kenyan esteemed clients have a
              seamless memorable travel experience.
            </Typography>
            <button className="hotel-buttons font-poppins">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <Footer />
  </>

);
export default HotelBooking;
