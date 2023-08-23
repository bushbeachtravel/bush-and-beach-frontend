
// import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { Typography, Input, Textarea, Button } from '@material-tailwind/react';
import { FaRegClock, FaChildren, FaXmark, FaCheck } from 'react-icons/fa6';
import { GoLocation } from 'react-icons/go'
import NavigationMenu from '../NavigationMenu';
import { SafariItenary } from './SafariItenary';
import { included, excluded } from '../../data/safari';
import '../../assets/styles/Kenya.css';
import { settings } from '../../data/safari';

const SafariDetail = ({ images, safariTitle, duration, itenary, formData }) => {


  return (
    <>
      <NavigationMenu />
      <section className="safari-container flex justify-center">
        <div className="safari-inner">
          <Slider {...settings} className="slider w-full h-full">
            {images.map((image, index) => (
              <div key={index} className="gallery-slide">
                <img src={image.src} alt={`Image ${index + 1}`} className="p-2 object-cover h-full w-full" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="safari-details flex flex-wrap justify-between p-2 gap-4">
        <div className="left-details flex flex-col px-6">
          <div className="safari-header">
            <Typography variant="lead" className="font-poppins">
              {safariTitle}
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
                {duration}
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
            <SafariItenary itenary={itenary} />
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
            <Typography variant="h6" className="font-poppins">
              {formData.promoTitle}
            </Typography>
            <Typography variant="paragraph" className="font-poppins mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              {formData.promoBody}
            </Typography>

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
      <section className="flex font-poppins p-6 include-section">
        <div className="flex flex-wrap justify-between gap-5">
          <div className="included">
            <Typography variant="h3" className="font-poppins">
              Included
            </Typography>
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div>
                <FaCheck size={20} color='green' className="font-bold"/>
                </div>
                <Typography variant="paragraph" className="flex font-poppins ">
                  {item}
                </Typography>
              </div>
            ))}
          </div>
          <div className="excluded">
            <Typography variant="h3" className="font-poppins">
              Excluded
            </Typography>
            {excluded.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div>
                <FaXmark size={20} color='red' className="font-bold"/>
                </div>
                <Typography variant="paragraph" className="font-poppins">
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

SafariDetail.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  safariTitle: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  itenary: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,

}
export default SafariDetail;
