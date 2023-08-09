import { Carousel, Typography, Button } from "@material-tailwind/react";
import accomodation from '../assets/accomodation.jpg'
import airpotTransfer from '../assets/airpotTransfer.jpg'
import airTravel from '../assets/airTravel.jpg'
import conference from '../assets/conference.jpg'
import safariPackage from '../assets/safariPackage.jpg'
import wild from '../assets/wild.jpg'
import travelling from '../assets/travelling.jpg'

import '../assets/styles/HomePage.css';

const slides = [
  {
    image: accomodation,
    title: 'Hotel Booking',
    para: `We at Bush and Beach tours and safaris beleive a tour is more than just seeing the scenery. 
    It’s all about the whole experience and this business is driven by our mission statement.`,

  },
  {
    image: conference,
    title: 'Conference Packages',
    para: `Bush and Beach have partnered with various hotels 
    and conference centers to offer the best 
    conference packages across East Africa.`,
  },
  {
    image: airTravel,
    title: 'Air Ticketing',
    para: `We are an accredited Travel agent that sells 
    both local and international air tickets. 
    We work closely with all the airlines providing us 
    with a chance to advice and give our clients 
    the best available rates from different airlines..`,
  },
  {
    image: airpotTransfer,
    title: 'Airport transfers',
    para: `Landing in a new airport at any time and finding 
    your way to the expected destination can be challenging and hectic. 
    We at Bush and Beach have partnered with different travel 
    agents across the globe to facilitate smooth and reliable 
    transfers from the airport to the hotels`,
  },
  {
    image: travelling,
    title: 'Travel Advisories',
    para: `We listen, evaluate and undertand the needs of our clients 
    and advice with the best of our knowledge to meet all our 
    customer’s expectations and requirements.`,
  },
  {
    image: wild,
    title: 'Visa processing',
    para: `Get help with your visa processing`,
  },
  {
    image: safariPackage,
    title: 'Safari & Game Drives',
    para: `We offer special game drive packages to various organizations, 
    groups or individual that are fun packed and memorable. 
    Our dedicated team has taken time to know the country and 
    the world thus able to provide well selected safari and game drive packages.`,
  },

]


export const HomePage = () => {

  return (
    <Carousel
      className="carousel"
      transition={{ duration: 2 }}
      autoplay={true}
      autoplayInterval={5000}
      loop={true}
    >
      {slides.map((carousel, index) => (
        <div 
        key={index}
        className="relative h-full w-full slide"
        >
        <img
          src={carousel.image}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-poppins"
            >
              {carousel.title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 font-poppins"
            >
              {carousel.para}
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" className="carousel-btn font-poppins">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </Carousel>
    // <Carousel
    //   className="carousel"
    //   transition={{ duration: 2 }}
    //   autoplay={true}
    //   autoplayInterval={5000}
    //   loop={true}
    // >
    //   {slides.map((carousel, index) => (
    //     <div className="" key={index}>
    //         <img
    //           src={carousel.image}
    //           alt={carousel.title}
    //           className=""
    //         />
    //       <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
    //         <div className="w-3/4 text-center md:w-2/4">
    //           <Typography
    //             variant="h1"
    //             color="white"
    //             className="mb-4 text-3xl md:text-4xl lg:text-5xl"
    //           >
    //             {carousel.title}
    //           </Typography>
    //           <Typography
    //             variant="lead"
    //             color="white"
    //             className="mb-12 opacity-80"
    //           >
    //             {carousel.para}
    //           </Typography>
    //           <div className="flex justify-center gap-2">
    //             <Button size="lg" className="carousel-btn">
    //               Explore
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </Carousel>
  )
};
export default HomePage;


