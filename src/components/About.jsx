import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import '../assets/styles/Blog.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="flex p-5 about-background"></div>
      <div className="about-container ">
        <div className="about-us-header p-20">
          <div className="p-5 m-3 about-desc p-10">
            <div className="dot"></div>
            <Typography variant="lead" className="font-poppins text-5xl py-">
              Bush & Beach
              <br />
              Safaris.
            </Typography>
            <div className="py-3 about-para">
              <Typography variant="" className="py-3">
                We offer you Extra Ordinary Packages
                Air Ticketing | Hotel Booking | Game Drives
              </Typography>
              <Button color="blue" type="submit" className="py-3">Contact Us</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center py-20">
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
          <div className="our-mission flex flex-col">
            <div className="mission-container flex">
              <div className="mission-upper w-3/6">
                <Typography variant="h3" className="font-poppins text-center mt-10">
                  Our Mission
                </Typography>
                <Typography variant="small" className="font-poppins p-5">
                  We strive to be the premier travel service company committed to making
                  travel most pleasurable, safe, fun, exciting and hassle-free
                  for our customers through delivery of quality service that exceeds their expectations.
                </Typography>
              </div>
              <div className="mission-upper w-3/6">
                <Typography variant="h3" className="font-poppins text-center mt-10">
                  Our Vision
                </Typography>
                <Typography variant="small" className="font-poppins p-5">
                  Focusing on to be the leading tours and transport solution provider
                  and establish a professional managed travel and Tour Company of global standard.
                </Typography>
              </div>
            </div>
            <div className="mission-lower">
              <Typography variant="h3" color="white" className="font-poppins font-bold text-center">
                Our Story
              </Typography>
              <Typography className="font-poppins p-5 text-center" color="white">
                Bush and Beach Travel & Safaris Ltd is a fully integrated tour and travels
                company with a proven track record that provides customised luxury
                journeys to inspiring destinations.We are a trusted company, passionate travel 
                specialists who strive to ensure that we are and remain the perfect solution to transport
                and tour requirements in East Africa.
                <br />
                Our trips are completely based around
                our clients’ interests and schedule but also specialist in one-of-a-kind
                beach experiences and expeditions.
                At bush and beach we provide the most magical opportunities to
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
  );
};
export default About;
