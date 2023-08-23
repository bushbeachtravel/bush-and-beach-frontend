import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MdWbSunny, MdModeNight } from 'react-icons/md'
import { parks, animals } from "../../data/safari";
import NavigationMenu from "../NavigationMenu";
import SafariCarousel from "./Carousel";
import Footer from "../Footer";

import wild from '../../assets/images/wild.jpg'
import '../../assets/styles/Kenya.css';

const KenyaSafaris = () => (
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
          <Typography variant="h1" color="white" className="font-poppins">
            Welcome To Kenya Safari
          </Typography>
          <Typography variant="h5" color="white" className="font-poppins">
            Home To The Big Five
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
      <div className="flex flex-wrap p-5">
        <Typography variant="paragraph" className="w-1/2 p-3 font-poppins">
          Welcome to Kenya which is known for being the world’s best safari
          destination with more than 50 epic national parks and reserves
          that are home to diverse wildlife including the big five
          (Lions, Leopards, Elephants, Rhinoceros and Buffalos).
          You will get to experience the notorious wildebeest migration
          with a picturesque view of over 2 million animals migrating from
          Serengeti national park into Masai Mara national park which normally
          happens in July to October every year. This experience has been
          ranked as one of the seven wonders of the world.
        </Typography>
        <Typography variant="paragraph" className="w-1/2 p-3 font-poppins">
          Kenya is an ideal place for visitors to enjoy breath-taking tourism safaris.
          There are several activities including the hot air balloon safaris conducted
          majority in Masai Mara and Amboseli national reserve making it an unforgettable
          experience to view wildlife from the air. The organized safaris
          will help you visit several destinations in Kenya in the shortest
          time possible. Our Kenyan bush safaris is categorized as below
          depending on how long you would wish to stay enabling you to have
          a captivating and a memorable experience;
        </Typography>
      </div>
      <SafariCarousel images={animals} />
    </section>
    <section className="safari-header">
      <div className="p-20">
        <Typography variant="h3" className="font-poppins text-center">
          A Symphony Of Untamed Nature&apos;s Beauty.
        </Typography>
        <Typography variant="paragraph" className="font-poppins">
          Let us take you from the iconic savannahs of the Maasai Mara, where golden grasses sway
          in harmony with the rhythms of the wild, to the enchanting embrace of
          Amboseli&apos;s elephants against the backdrop of towering Kilimanjaro, and also to witness
          the great wildebeest migration which paints the plains with a
          mesmerizing spectacle of life&apos;s eternal cycle.
          Come with us to see the Lions, leopards, and cheetahs prowl
          with regal grace both in the city as well as in the the grasslands.
          Come with us to Lake Nakuru to witness the theater of flamingo-pink ballet.
        </Typography>
      </div>
    </section>
    <section className="safari-section w-full p-7 flex justify-center flex-wrap gap-3">
      {parks.map((items, index) => (
        <Card className="mt-6 w-96" key={index}>
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={items.image}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="paragraph" color="blue-gray" className="mb-2 font-poppins font-bold text-center">
              {items.title} 
            </Typography>
            <div className="flex justify-center gap-5">
              <div className="flex items-center">
                <Typography variant="small" className="font-poppins items-center font-bold">
                  {items.days}
                </Typography>
                <MdWbSunny />
                <Typography className="font-poppins font-bold" variant="small">
                  days
                </Typography>
              </div>
              <Typography variant="small" className="font-poppins font-bold items-center">&</Typography>
              <div className="flex items-center">
                <Typography variant="small" className="font-bold items-center font-poppins">
                  {items.nights}
                </Typography>
                <MdModeNight />
                <Typography className="font-poppins font-bold" variant="small">
                  nights
                </Typography>

              </div>
            </div>
            <Typography variant="paragraph" className="font-poppins">
              {items.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="font-poppins">
              <Link to={`/${items.url}`}>
                Details
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
    <Footer />
  </>

);
export default KenyaSafaris;
