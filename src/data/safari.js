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
import tsavoWest from '../assets/images/safari/tsavo-west.jpg';
import amboseli from '../assets/images/safari/amboseli.jpg';
import ninDaysSafari from '../assets/images/9days-safari.jpg';
import lakeNaivasha from '../assets/images/lake-naivasha.jpg';
import olPajeta from '../assets/images/safari/ol-pajeta.jpg';
import buffalo from '../assets/images/safari/buffallo.jpg'
import bongo from '../assets/images/safari/bongo.jpg';
import coast from '../assets/images/safari/beach.jpg';


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
  },
  {
    src: rhino,
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
  {
    title: "4 Days Taste of Kenya Safari",
    image: rhino,
    days: "4",
    nights: "3",
    description: `4 Days Taste of Kenya Safari takes to Kenya’s most famous National Parks, 
    the Masai Mara and Lake Nakuru.`,
    url: "kenya-safari"
  },
  {
    title: "9 Days Kenya Wildlife Safari",
    image: ninDaysSafari,
    days: "9",
    nights: "8",
    description: `9 Days Kenya Wildlife Safari takes you to the most famous national parks in Kenya.`,
    url: "mara-lake-nakuru"
  },
  {
    title: "7 Days Big Five Safari",
    image: lakeNaivasha,
    days: "7",
    nights: "6",
    description: `7 Days Big Five Kenya Safari is a premium safari which gives you a unique experience. `,
    url: "nakuru-aberdare"
  },
  {
    title: "11 Days Kenya Classic Safari",
    image: buffalo,
    days: "11",
    nights: "10",
    description: `11 Days Kenya Classic Safari is ideal for families and couples looking for an active trip and a once-in-a-lifetime vacation.`,
    url: "olpajeta"
  },
  {
    title: "5 Days Giants Trail Safari",
    image: olPajeta,
    days: "5",
    nights: "4",
    description: `5 Days Safari takes you to Amboseli National Park famous for its enormous elephants.`,
    url: "giant-safari"
  },
  {
    title: "6 Days Kenya Highlights Safari",
    image: bongo,
    days: "6",
    nights: "5",
    description: `6 Days Kenya Highlights Safari takes you to Kenya’s diverse national parks and private ranches.`,
    url: "highlight-safari"
  },
  {
    title: "10 Days Bush and Beach Safari",
    image: coast,
    days: "10",
    nights: "9",
    description: `10 Days Bush and Beach Safari takes you from the wild to the sandy beaches of Kenya.`,
    url: "bush-beach-safari"
  },

]

export const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};