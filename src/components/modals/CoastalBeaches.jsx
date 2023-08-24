import {
  Typography,
  Button,
} from "@material-tailwind/react";

import { MdModeNight } from 'react-icons/md'
import { animals } from "../../data/safari";
import NavigationMenu from "../NavigationMenu";
import SafariCarousel from "./Carousel";
import Footer from "../Footer";

import wild from '../../assets/images/wild.jpg'
import '../../assets/styles/Kenya.css';

const KenyaCostalBeaches = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      <NavigationMenu />
      <figure className="relative h-full w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={wild}
          alt="nature image"
        />
        <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div>
            <Typography color="white" className="font-poppins" id="lead-text">
              Kenya Coastal Beaches
            </Typography>
          </div>
        </figcaption>
      </figure>
      <section className="safari-section w-full">
        <div className="flex flex-col items-center">
          <Typography variant="h4" className="font-poppins p-7">
            Adventure like no other.
          </Typography>
          <div className="line-seperator"></div>
        </div>
        <div className="flex justify-evenly flex-wrap w-full py-5">
          <div className="left-para p-5">
            <Typography variant="paragraph" className=" p-3 font-poppins">
              Kenyan coast has been ranked among the best and sought-after destinations
              within the region for several years consecutively and has won Africa’s
              leading beach destination by the world travel awards
              It is renowned for its wonderful mix of cultures,
              fascinating history, vibrant night-life and endless
              pearly white beaches with warm, azure waters. It&apos;s a
              tropical paradise and holiday haven for many visitors from around the world.
              The weather is generally hot with average temperatures of 31
              degrees Celsius all year round and a cool ocean breeze blowing
              through making it a beloved tropical destination by visitors
            </Typography>
          </div>
          <div className="right-para p-5">
            <Typography variant="paragraph" className=" p-3 font-poppins">
              The expansive beaches are divided into north coast which is in
              mainland Kenya and south coast known as ukunda.
              North coast beach include Mombasa, Malindi, Watamu and Lamu.
              South coast beach includes Diani further along to Zanzibar island
              which is in Tanzania. We have partnered with various reputable beach
              front hotels and resorts offering accommodation and other services
              to ensure our clients needs are met with the outmost magical experiences.
            </Typography>
          </div>
        </div>
        <SafariCarousel images={animals} />
      </section>
      <section className="safari-header">
        <Typography className="font-poppins text-center p-10" id="safari-ad-text">
          Kenya&apos;s Coastal Paradise: Where Beaches Meet Adventure
        </Typography>
        <Typography variant="paragraph" className="font-poppins p-10">
          Nestled along the azure waters of the Indian Ocean,
          Kenya&apos;s coast unveils a captivating world where vibrant cultures,
          pristine beaches, and exotic landscapes converge.
          From the bustling streets of Mombasa, steeped in history and culture,
          to the tranquil shores of Diani Beach and Watamu, a tapestry
          of paradise awaits. Soft sands, kissed by gentle waves,
          invite you to unwind beneath swaying palms, while coral reefs
          beckon with a kaleidoscope of marine life.
          Experience the thrill of water sports, delve into vibrant markets,
          and savor the flavors of Swahili cuisine.
          Kenya&apos;s coastal beauty offers a seamless blend of relaxation and
          exploration, where the rhythm of the tides matches the beat of your heart
        </Typography>
      </section>
      <section className="activities-section">
        <Typography variant="lead" className="font-poppins font-bold mx-20">Activities at the Kenyan coast</Typography>
        <div className="activities-section flex flex-wrap justify-center">
          {numbers.map((item, index) => (
            <div className="w-96 coast-container" key={index}>
              <div className="content">
                <figure className="relative h-96 w-full">
                  <div className="content-overlay"></div>
                  <img
                    className="h-96 w-full object-cover object-center content-image"
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt="nature image"
                  />
                  <div className="content-details fadeIn-bottom">
                    <Typography variant="h5" color="white" className="content-title" >
                      Sara Lamalo
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal content-title">
                      20 July 2022
                    </Typography>
                    <Typography variant="h5" color="white" className="content-text">
                      <MdModeNight color="white" />Growth
                    </Typography>
                  </div>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="talk-to-us">
        <div className="flex flex-col items-center gap-6 font-poppins p-20 py-20">
          <Typography variant="h4" className="font-poppins text-2xl">
            Ready to Explore Kenya&apos;s Coastal Paradise? Your Adventure Awaits!
          </Typography>
          <div className="rwanda-line-seperator"></div>
        </div>
        <div className="coast-background">
          <div className="coast-text-background w-2/3 p-5">
            <div className="w-full">
              <Typography color="white" variant="paragraph" className="font-poppins text-xl py-10">
                Dive into the beauty of Kenya&apos;s
                coast and beaches, where every moment
                is a new discovery. Immerse yourself
                in the rich cultural tapestry of Mombasa,
                feel the soft sands of Diani Beach between
                your toes, and snorkel through vibrant coral
                reefs in Watamu&apos;s crystal-clear waters.
              </Typography>
            </div>
            <Typography variant="h3" color="white" className="font-poppins text-center py-5">
              Book Your Coastal Escape Today!
            </Typography>
          </div>
          <div className="py-10">
            <Button className="font-poppins" id="button">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default KenyaCostalBeaches;