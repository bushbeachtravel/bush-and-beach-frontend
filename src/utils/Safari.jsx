import 'react-gallery-carousel/dist/index.css';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { Typography } from '@material-tailwind/react';
import { FaRegClock, FaChildren } from 'react-icons/fa6';
import { GoLocation } from 'react-icons/go'

import 'react-phone-number-input/style.css'

import NavigationMenu from '../features/home-page/NavigationMenu';
import RequisitionForm from '../features/requisition-form/RequisitionForm';
import { SafariItenary } from './SafariItenary';
import '../assets/styles/Kenya.css';
import { settings } from '../data/safari';


const SafariDetail = ({ images, safariTitle, duration, itenary, formData, location }) => {

  return (
    <>
      <NavigationMenu />
      <section className="safari-container flex justify-center">
        <div className="safari-inner">
          <Slider {...settings} className="">
            {images.map((image, index) => (
              <div key={index} className="p-1">
                <img src={image.src} alt={`Image ${index + 1}`} className="object-cover object-center carousel-images w-full" />
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
            <GoLocation className="iternary-icons" size={30} />
            <Typography className="font-poppins">
              {location}
            </Typography>
          </div>
        </div>
        <div className="right-details flex justify-between gap-8 px-6">
          <div className="duration flex gap-5 items-center">
            <FaRegClock className="iternary-icons" size={30} />
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
            <FaChildren className="iternary-icons" size={30} />
            <div className="text flex flex-col">
              <Typography variant="small" className="font-poppins" >
                Min Age
              </Typography>
              <Typography variant="small" className="font-poppins">
                3 years
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap justify-between form-section">
        <div className="itenary m-5">
          <div className="w-full one p-5">
            <Typography variant="h4" className="font-poppins">
              Itinerary
            </Typography>
            <div>
              <SafariItenary itenary={itenary} />
            </div>
          </div>
        </div>
        <div className="enquiry-form w-96 flex flex-col m-5">
          <div className="price justify-center p-5">
            <Typography variant="small" className="font-poppins font-bold py-3">
              {formData.promoTitle}
            </Typography>
            <Typography variant="small" className="font-poppins py-3 promo-body">
              {formData.promoBody}
            </Typography>
            <div className="py-5">
              <Typography variant="small" className="font-poppins font-bold">
                {formData.callToAction}
              </Typography>
            </div>
            <RequisitionForm />
          </div>
        </div>
      </section >
    </>
  );
};

SafariDetail.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  safariTitle: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  itenary: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,

}
export default SafariDetail;
