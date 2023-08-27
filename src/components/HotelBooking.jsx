import { Typography } from "@material-tailwind/react";
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";
import { kenyaSafari, rwandaUganda, mombasa, zanzibarTours, internationalTrips } from "../data/trips";
import '../assets/styles/HomePage.css';
import { Link } from "react-router-dom";

const HotelBooking = () => (
  <>
    <NavigationMenu />
    <section className="hotel-book-section py-10">
      <div className="service-container h-full w-full">
        <div className="content-container">
          <div className="image-container">
            <img src={kenyaSafari.image} alt={kenyaSafari.title} className="h-80 w-full object-cover object-center"/>
          </div>
        </div>
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              {kenyaSafari.title}
            </Typography>
            <Typography className="font-poppins">
              {kenyaSafari.bodyText}
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to={`/${kenyaSafari.url}`}>Explore</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="content-container mobile">
          <div className="image-container">
            <img src={mombasa.image} alt={mombasa.title} className="h-80 w-full object-cover object-center" />
          </div>
        </div>
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              {mombasa.title}
            </Typography>
            <Typography className="font-poppins">
              {mombasa.bodyText}
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to={`/${mombasa.url}`}>Explore</Link>
            </button>
          </div>
        </div>
        <div className="content-container desktop">
          <div className="image-container">
            <img src={mombasa.image} alt={mombasa.title} className="h-80 w-full object-cover object-center" />
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="content-container">
          <div className="image-container h-80">
            <img src={zanzibarTours.image} alt={zanzibarTours.title} className="h-full w-full object-cover object-center"/>
          </div>
        </div>
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              {zanzibarTours.title}
            </Typography>
            <Typography className="font-poppins">
              {zanzibarTours.bodyText}
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to={`/${zanzibarTours.url}`}>
                Explore
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="content-container mobile">
          <div className="image-container">
            <img src={rwandaUganda.image} alt={rwandaUganda.title} className="h-80 w-full object-cover object-center" />
          </div>
        </div>
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              {rwandaUganda.title}
            </Typography>
            <Typography className="font-poppins">
              {rwandaUganda.bodyText}
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to="/rwanda-uganda">Explore</Link>
            </button>
          </div>
        </div>
        <div className="content-container desktop">
          <div className="image-container">
            <img src={rwandaUganda.image} alt={rwandaUganda.title} className="h-80 w-full object-cover object-center"/>
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="content-container">
          <div className="image-container">
            <img src={internationalTrips.image} alt={internationalTrips.title} className="h-80 w-full object-cover object-center"/>
          </div>
        </div>
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              {internationalTrips.title}
            </Typography>
            <Typography className="font-poppins">
              {internationalTrips.bodyText}
            </Typography>
            <button className="hotel-buttons font-poppins">
              <Link to={`/${internationalTrips.url}`}>
                Explore
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>

);
export default HotelBooking;
