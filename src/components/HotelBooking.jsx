import { Typography } from "@material-tailwind/react";
import HotelModalWindow from "./modals/HotelModal";
import LukenyaModalWindow from "./modals/LukenyaModal";
import ZanzibarModalWindow from "./modals/ZanzibarModal";
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";

import '../assets/styles/HomePage.css';
import image from '../assets/images/hotel.jpg'

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
              Arabian Courtyard Hotel & Spar
            </Typography>
            <br />
            <Typography className="font-poppins">
              Arabian Courtyard Hotel & Spa is an award winning 4-star hotel in Dubai
              with Arabian theme, located opposite Dubai Museum.
              Surrounded by various points of interest such as Meena Bazaar, Gold Souk,
              Spice Market, Al Fahidi historical area (Bastakiya),
              Al Seef Dubai Creek and walking distance to diplomatic enclave,
              consulates and embassies.Sharaf DG Metro Station as well as
              Al Ghubaiba Metro and Bus Stations are 500 meters walk away.
            </Typography>
            <HotelModalWindow />
          </div>
        </div>
      </div>
      <div className="service-container">
        <div className="container-text">
          <div className="inner-container">
            <Typography variant="h3" className="font-poppins">
              Lukenya Gateway Hotel
            </Typography>
            <br />
            <Typography className="font-poppins">
              Lukenya Getaway is rightly named as it is the perfect Getaway away from the busy city life.
              We ride on our promise to offer a serene, quiet, peaceful and personal environment.
              Within our surroundings.This makes Lukenya Getaway the ideal venue for strategic thinking,
              rejuvenation, recreation and relaxation. Located just
              40km from the city Center and just 25 mins from JKIA,
              the resort lies on 16 acres of ever green plush gardens making it
              convenient and enjoyable for corporate groups, tourists, church groups,
              families, and individuals seeking relaxation & rejuvenation
            </Typography>
            <LukenyaModalWindow />
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
              Sunshine Hotel Zanzibar
            </Typography>
            <br />
            <Typography className="font-poppins">
              Sunshine Zanzibar Group consists of two sister properties:
              Sunshine Bay and Sunshine Marine Lodge.
              They are both located at the North-Eastern coast of the Unguja Island (Zanzibar).
              Designed in genuine Swahili style, offer the same level of comfort
              but different experience with the aim of meeting the increasingly
              demanding needs for unique holidays.
            </Typography>
            <ZanzibarModalWindow />
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
