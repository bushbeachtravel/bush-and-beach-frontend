import bufallo from '../assets/images/safari/buffalo.jpg'
import elephants from '../assets/images/safari/elephant.jpg'
import leopard from '../assets/images/safari/leopard.jpg'
import lion from '../assets/images/safari/lion.jpg'
import rhino from '../assets/images/safari/rhino.jpg'

import wildbeest from '../assets/images/safari/wildebeest.jpg'
import nakuru from '../assets/images/safari/lake-nakuru.jpg';
import mountKenya from '../assets/images/safari/mount-kenya.jpg';
import nairobi from '../assets/images/safari/nairobi-national-park.jpg';
import samburu from '../assets/images/safari/samburu.jpg';
// import tsavoEast from '../assets/images/safari/tsavo-east.jpg';
import tsavoWest from '../assets/images/safari/tsavo-west.jpg';
// import tsavo from '../assets/images/safari/tsavo.jpg';
import amboseli from '../assets/images/safari/amboseli.jpg';

export const maraImages = [
  {
    src: nairobi,
    alt: "Zebra",
  },
  {
    src: elephants,
    alt: "Elephants",
  },
  {
    src: lion,
    alt: "Lions",
  },
  {
    src: leopard,
    alt: "Leopard"
  }
];

export const animals = [bufallo, elephants, leopard, lion, rhino];
export const parks = [
  {
    title: "Masai Mara",
    image: wildbeest,
    days: "3",
    nights: "2",
    description: `
    Mesmerizing Masai Mara. A 3 Days and 2 Nights Safari Escape To
    Experience the Wild Wonder of Masai Mara
    `,
    url: "masai-mara",
  },
  {
    title: "Lake Nakuru and Masai Mara",
    description: `Discover the Splendors of Lake 
    Nakuru and Masai Mara in a 4 Days and 3 Nights Adventure!`,
    image: nakuru,
    days: "4",
    nights: "3",
    url: "lake-nakuru-masai-mara",
  },
  {
    title: "Nairobi, Samburu, and Masai Mara ",
    image: samburu,
    days: "7",
    nights: "6",
    description: `Discover Nairobi, Samburu, 
    and Masai Mara for a 7 Days & 6 Nights Adventure of a Lifetime! `,
    url: "nairobi-samburu-masaai-mara",
  },
  {
    title: "Amboseli and Tsavo West ",
    image: tsavoWest,
    days: "4",
    nights: "3",
    description: `
    A 4 Days and 3 Nights Expedition into Kenya's 
    wilderness at Amboseli and Tsavo West.
    Embrace the Untamed Beauty of Amboseli and Tsavo West`,
    url: "amboseli-tsavo-west",
  },
  {
    title: "Nairobi, Amboseli, and Masai Mara",
    image: nairobi,
    days: "6",
    nights: "5",
    description: `
    Embark on a Captivating Journey through Nairobi, 
    Amboseli, and Masai Mara for a 6 Days and 5 
    Nights Unforgettable Safari Adventure! `,
    url: `nairobi-amboseli-mara`,
  },
  {
    title: "Nairobi, Amboseli, Mt. Kenya, Lake Nakuru, and Masai Mara ",
    image: mountKenya,
    days: "8",
    nights: "7",
    description: `
      Embark on a Grand Expedition Through Nairobi, 
      Amboseli, Mt. Kenya, Lake Nakuru, and Masai Mara`,
    url: "nrb-amboseli-nakuru-mt-kenya-masaai-mara"
  },
  {
    title: "Nairobi, Amboseli, Lewa conservancy, and Masai Mara",
    image: amboseli,
    days: "8",
    nights: "7",
    description: `
    A Kaleidoscopic Expedition through Nairobi, 
    Amboseli, Lewa Conservancy, and Masai Mara For 8 Days and 7 Nights`,
    url: "nairobi-amboseli-lewa-mara"
  },

]


export const included = [
  `Roundtrip Airpot Transfers`, `All government taxes`,
  `Unlimited supply of drinking water during the safari`,
];

export const excluded = [
  `Internation flights from your home and back`,
  `Additional accomodation before and after the safari`,
  `Tips and gratuity`,
  `Personal items`, `Government imposed increase of taxes including parking fees`
];


export const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
};