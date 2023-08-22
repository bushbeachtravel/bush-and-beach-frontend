
// import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Slider from "react-slick";
import { Typography, Input, Textarea, Button } from '@material-tailwind/react';
import { FaRegClock, FaChildren } from 'react-icons/fa6';
import { GoLocation } from 'react-icons/go'
import Footer from '../Footer';
import NavigationMenu from '../NavigationMenu';
import { SafariItenary } from './SafariItenary';
import '../../assets/styles/Kenya.css';

import { images } from '../../data/safari';

const SafariDetail = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <>
      <NavigationMenu />
      <section className="safari-container flex justify-center">
        <div className="safari-inner">
          <Slider {...settings} className="slider w-full h-full">
            {images.map((image, index) => (
              <div key={index} className="gallery-slide">
                <img src={image.src} alt={`Image ${index + 1}`} className="p-2 object-cover h-full w-full"/>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="safari-details flex flex-wrap justify-between p-2 gap-4">
        <div className="left-details flex flex-col px-6">
          <div className="safari-header">
            <Typography variant="lead" className="font-poppins">
              Masaai Mara, Nairobi National Park
            </Typography>
          </div>
          <div className="safari-location flex items-center gap-5">
            <GoLocation className="iternary-icons" />
            <Typography className="font-poppins">Kenya</Typography>
          </div>
        </div>
        <div className="right-details flex justify-between gap-8 px-6">
          <div className="duration flex gap-5 items-center">
            <FaRegClock className="iternary-icons" />
            <div className="text flex flex-col">
              <Typography variant="small" className="font-poppins" >
                Duration
              </Typography>
              <Typography variant="small" className="font-poppins">
                7 Days & 6 Nights
              </Typography>
            </div>
          </div>
          <div className="age flex gap-5 items-center">
            <FaChildren className="iternary-icons" />
            <div className="text flex flex-col">
              <Typography variant="small" className="font-poppins" >
                Min Age
              </Typography>
              <Typography variant="small" className="font-poppins">
                0
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between flex-wrap p-2 form-section">
        <div className="itenary">
          <div className="w-full p-5 one ">
            <Typography variant="h3" className="font-poppins">
              Itinerary
            </Typography>
            <SafariItenary />
          </div>
        </div>
        <div className="enquiry-form flex flex-col p-6">
          <div className="price justify-between">
            <div className="flex justify-between">
              <div className="text">
                <Typography variant="lead" className="font-poppins">
                  From as low as
                </Typography>
              </div>
              <div className="amount font-poppins">
                <Typography variant="lead" className="font-poppins">
                  Ksh 15,000
                </Typography>
              </div>
            </div>
            <br />
            <hr />
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input color="blue" label="Enter Name" className="font-poppins" />
                <Input type="email" color="blue" label="Enter email" className="font-poppins" />
                <Textarea label="Message" color="blue" className="font-poppins" />
              </div>
              <Button>Send enquiry</Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SafariDetail;