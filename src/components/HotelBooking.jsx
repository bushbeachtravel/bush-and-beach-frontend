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
              Welcome to Kenya which is known for being the world’s best safari destination
              with more than 50 epic national parks and reserves that are home
              to diverse wildlife including the big fiveYou will get to experience
              the notorious wildebeest migration
              with a picturesque view of over 2 million animals migrating
              from Serengeti national park into Masai Mara national park which
              normally happens in July to October every year.
              This experience has been ranked as one of the seven wonders
              of the world
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
              destinations within the region and has won Africa’s leading beach
              destination by the world travel awards.It is renowned for its
              wonderful mix of cultures, fascinating history,
              vibrant night-life and endless pearly white
              beaches with warm, azure waters. We have partnered with various reputable
              beach front hotels and resorts offering accommodation and other
              services to ensure our clients needs are met with the
              outmost magical experiences.
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
              Discover the best of Zanzibar, home to many endangered
              species including the red colobus monkey and green turtle.
              Our Zanzibar day tours offer a perfect opportunity
              to explore the islands breathtaking landscapes,
              exotic beaches, famous spice farms, history and
              diverse wildlife and culture. We will tailor make the itinerary to
              suit your preferences.
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
              Are you ready for a once-in-a-lifetime journey into the heart of
              Africa&apos;s wilderness? Immerse yourself in the incredible beauty of
              Rwanda and Uganda as you come face to face with magnificent mountain gorillas.
              We plan for our client&apos;s holiday to Rwanda/Uganda to
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
              Calling all esteemed travelers from Kenya!
              Get ready to embark on a journey of a lifetime
              as we bring the world to your fingertips.
              Our partnership with renowned tour companies
              in Dubai, Israel, Egypt, Singapore, Thailand, Italy,
              Barcelona, and France ensures a seamless and
              unforgettable travel experience.We have partnered with
              other tour companies in various
              countries to enable our Kenyan esteemed clients have a
              seamless memorable travel experience.
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to="/international">
                Explore
              </Link>
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
