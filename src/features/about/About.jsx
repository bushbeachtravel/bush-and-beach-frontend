import {
  Typography,
  Button, IconButton
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'
import { FaCheckToSlot, FaPhone, FaPaperPlane } from 'react-icons/fa6'
import Footer from "../footer/Footer";
import NavigationMenu from "../home-page/NavigationMenu";
import {
  leftServices, rightServices, values,
  mission, story
} from "./about";
import '../../assets/styles/Blog.css';

const About = () => {
  return (
    <>
      <NavigationMenu />
      <section className="about-section">
        <div className="flex p-5 about-background"></div>
        <div className="about-container ">
          <div className="about-us-header p-10">
            <div className="about-desc p-10">
              <div className="dot"></div>
              <Typography variant="h3" className="font-poppins py-">
                Bush & Beach
                <br />
                Safaris.
              </Typography>
              <div className="py-3 about-para">
                <Typography variant="" className="py-3 font-poppins">
                  We offer you Extra Ordinary Packages <br />
                </Typography>
                <div className="flex flex-wrap justify-around">
                  <Typography variant="h7" className="flex gap-1 items-center font-poppins font-bold">
                    <FaCheckCircle size={25} color="green" />
                    Air Ticketing
                  </Typography>
                  <Typography variant="h7" className="flex gap-1 items-center font-poppins font-bold">
                    <FaCheckCircle size={25} color="green" />
                    Hotel Booking
                  </Typography>
                  <Typography variant="h7" className="flex gap-1 items-center font-poppins font-bold">
                    <FaCheckCircle size={25} color="green" />Game Drives
                  </Typography>
                </div>
                <div className="py-8">
                  <Button color="blue" type="submit" className="">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center">
            <Typography variant="h4" color="white" className="text-center font-poppins m-4 p-8 values">
              Our Values.
            </Typography>
            <div className="flex flex-wrap gap-3 core-values-container">
              {values.map((item, index) => (
                <div key={index} className="our-values">
                  <Typography variant="lead" className="font-poppins font-bold m-2 text-center">
                    {item.title}
                  </Typography>
                  <Typography className="font-poppins">
                    {item.body}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="our-mission flex flex-col items-center justify-center">
              <div className="mission-container flex justify-around flex-wrap">
                {mission.map((item, index) => (
                  <div key={index} className="mission-upper w-96">
                    <Typography variant="h3" className="font-poppins text-center mt-10">
                      {item.title}
                    </Typography>
                    <Typography variant="paragraph" className="font-poppins p-5">
                      {item.body}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className="mission-lower">
                <Typography variant="h3" color="white" className="mt-10 font-poppins font-bold text-center">
                  {story.title}
                </Typography>
                <Typography variant="paragraph" className="font-poppins p-5" color="white">
                  {story.body}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex flex-col flex-wrap items-center services-section w-full h-full">
          <Typography variant="h2" color="white" className="text-center font-poppins p-10">
            Our services
          </Typography>

          <div className="flex flex-wrap">
            <div className="">
              <ul>
                {leftServices.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 p-3">
                    <IconButton className="rounded-full">
                      <FaCheckToSlot size={20} color="white" />
                    </IconButton>
                    <Typography variant="paragraph" color="white" className="font-poppins">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" inner-div">
              <ul>
                {rightServices.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 p-3">
                    <IconButton className="rounded-full">
                      <FaCheckToSlot size={20} color="white" />
                    </IconButton>
                    <Typography variant="" color="white" className="font-poppins">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-10">
            <Typography color="white" variant="h4" className="font-poppins font-bold py-5">
              Contact Us Today!!
            </Typography>
            <div className="flex items-center gap-5 py-2">
              <IconButton className="rounded-full">
                <FaPhone color="white" size={25} />
              </IconButton>
              <Typography variant="small" color="white" className="font-poppins font-bold">
                +254780269465
              </Typography>
            </div>
            <div className="flex items-center gap-5 py-2">
              <IconButton className="rounded-full">
                <FaPaperPlane size={20} />
              </IconButton>
              <Typography variant="small" color="white" className="font-poppins font-bold">
                sales@milantours.com
              </Typography>
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
};
export default About;
