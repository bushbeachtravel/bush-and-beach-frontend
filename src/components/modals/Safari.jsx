
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import NavigationMenu from '../NavigationMenu';
import { SafariItenary } from './SafariItenary';
import '../../assets/styles/Kenya.css';
import { Typography, Input, Textarea, Button } from '@material-tailwind/react';
import { FaRegClock, FaChildren } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr'


const SafariDetail = () => {
  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));

  return (
    <>
      <NavigationMenu />
      <section className="safari-container flex flex-col justify-center">
        <div className="safari-inner">
          <Carousel images={images} style={{ height: '100%', width: '100%' }} isAutoPlaying={true} className="obect-cover" />
        </div>
      </section>
      <section className="safari-details flex flex-wrap justify-between p-10">
        <div className="left-details flex flex-col">
          <div className="safari-header">
            <Typography variant="lead" className="font-poppins">
              Masaai Mara, Nairobi National Park
            </Typography>
          </div>
          <div className="safari-location flex items-center gap-5">
            <GrLocation /> Kenya
          </div>
        </div>
        <div className="right-details flex justify-between gap-8">
          <div className="duration flex gap-5 items-center">
            <FaRegClock />
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
            <FaChildren />
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
      <section className="flex justify-between flex-wrap p-7 form-section">
        <div className="itenary">
          <div className="w-full p-5 one ">
            <Typography variant="h3" className="font-poppins">
              Itinerary
            </Typography>
            <SafariItenary />
          </div>
        </div>
        <div className="enquiry-form flex flex-col p-5">
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
      <section className="itenary">
        
      </section>
    </>
  );
};

export default SafariDetail;
