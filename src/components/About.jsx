import {
  Typography,
  Button, IconButton
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'
import { FaCheckToSlot, FaPhone, FaPaperPlane } from 'react-icons/fa6'
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";
import { leftServices, rightServices } from "../data/about";
import '../assets/styles/Blog.css';

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
              <div className="our-values">
                <Typography variant="lead" className="font-poppins font-bold m-2 text-center">
                  Honesty
                </Typography>
                <Typography className="font-poppins">
                  We are always ready to admit our actions
                  regardless of the situations we are in.
                </Typography>
              </div>
              <div className="our-values">
                <Typography variant="lead" className="font-poppins font-bold m-2 text-center">
                  Transparency
                </Typography>
                <Typography className="font-poppins">
                  We have nothing to hide and are ready
                  to publicize our good performance as
                  wide as possible.
                </Typography>
              </div>
              <div className="our-values">
                <Typography variant="lead" className="font-poppins font-bold m-2 text-center">
                  Integrity
                </Typography>
                <Typography className="font-poppins">
                  We beleive in being responsible.
                  We accomplish what we say we will do to our clients.
                </Typography>
              </div>
              <div className="our-values">
                <Typography variant="lead" className="font-poppins font-bold m-2 text-center">
                  Excellence
                </Typography>
                <Typography className="font-poppins">
                  We try our best to make ourself so valuable in our work
                  so as to become indispensable.
                </Typography>
              </div>
            </div>
            <div className="our-mission flex flex-col items-center justify-center">
              <div className="mission-container flex justify-around flex-wrap">
                <div className="mission-upper w-96">
                  <Typography variant="h3" className="font-poppins text-center mt-10">
                    Our Mission
                  </Typography>
                  <Typography variant="paragraph" className="font-poppins p-5">
                    We strive to be the premier travel service company committed to making
                    travel most pleasurable, safe, fun, exciting and hassle-free
                    for our customers through delivery of quality service that exceeds their expectations.
                  </Typography>
                </div>
                <div className="mission-upper w-96 ">
                  <Typography variant="h3" className="font-poppins text-center mt-10">
                    Our Vision
                  </Typography>
                  <Typography variant="paragraph" className="font-poppins p-5">
                    Focusing on to be the leading tours and transport solution provider
                    and establish a professional managed travel and Tour Company of global standard.
                  </Typography>
                </div>
              </div>
              <div className="mission-lower">
                <Typography variant="h3" color="white" className="mt-10 font-poppins font-bold text-center">
                  Our Story
                </Typography>
                <Typography variant="paragraph" className="font-poppins p-5" color="white">
                  Bush and Beach Travel & Safaris Ltd is a fully integrated tour and travels
                  company with a proven track record that provides customised luxury
                  journeys to inspiring destinations.We are a trusted company, passionate travel
                  specialists who strive to ensure that we are and remain the perfect solution to transport
                  and tour requirements in East Africa.Our trips are completely based around
                  our clients’ interests and schedule but also specialist in one-of-a-kind
                  beach experiences and expeditions.At bush and beach we provide the most magical opportunities to
                  visit and see the discovered and undiscovered places in Kenya,
                  Africa and across the globe. From the highlands of Mt Kenya
                  to shores of the Indian Ocean, from Egyptian Pyramids in
                  Cape Town to the Eiffel Tower in France, Bush and Beach
                  Travel & Safaris Ltd believes in the best experience of a Safari.
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
