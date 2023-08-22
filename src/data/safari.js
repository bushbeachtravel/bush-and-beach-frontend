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

export const images = [
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
  // Add more images as needed
];

export const animals = [bufallo, elephants, leopard, lion, rhino];

export const parks = [
  {
    title: "Masai Mara",
    image: wildbeest,
    days: "3",
    nights: "2",
    description: `Witness the great wildebeest migration which paints the plains 
    with a mesmerizing spectacle of life's eternal cycle.`,
    url: "safari-details",
  },
  {
    title: "Lake Nakuru and Masai Mara",
    image: nakuru,
    days: "4",
    nights: "3",
    description: `Welcome Lake Nakuru, a theatre of flamingo-pink ballet.`
  },
  {
    title: "Nairobi, Samburu and Masai Mara ",
    image: samburu,
    days: "7",
    nights: "6",
    description: `Join us on a mesmerizing journey through the heart of Kenya's untamed wilderness. 
    Our exclusive safari takes you from the vibrant cityscape of Nairobi to the rugged beauty 
    of Samburu and the iconic expanses of the Masai Mara.`
  },
  {
    title: "Amboseli and Tsavo west ",
    image: tsavoWest,
    days: "4",
    nights: "3",
    description: `Come see the enchanting embrace of Amboseli's elephants against the backdrop of towering Kilimanjaro`
  },
  {
    title: "Nairobi, Amboseli and Masai Mara",
    image: nairobi,
    days: "6",
    nights: "5",
  },
  {
    title: "Nairobi, Amboseli, Mt. Kenya, Lake Nakuru, Masai Mara ",
    image: mountKenya,
    days: "8",
    nights: "7",
  },
  {
    title: "Nairobi, Amboseli, Lewa conservancy, Masai Mara Nairobi",
    image: amboseli,
    days: "8",
    nights: "7",
  },

]

export const masaaiMaraIternary = [
  {
    day: `Day 1`,
    title: 'Nairobi - Gateway to Adventure',
    activity: `Your adventure begins in Nairobi,
    where modern urban life meets the wild.
    Immerse yourself in the local culture and
    visit the renowned Nairobi National Park,
    spotting rhinos, lions, and giraffes
    against the backdrop of the city skyline`
  },
  {
    day: `Day 2-3`,
    title: `Samburu's Hidden Gems`,
    activity: `Venture north to Samburu, a hidden
    gem known for its unique wildlife.
    Witness the "Samburu Special Five"
    the rare reticulated giraffe, Grevy's zebra,
    Somali ostrich, Beisa oryx, and gerenuk.
    Enjoy game drives along the Ewaso Ng'iro River,
    surrounded by stunning landscapes.`
  },
  {
    day: `Day 4`,
    title: 'Majestic Masai Mara',
    activity: `Your journey culminates in the world-famous Masai Mara,
    where the circle of life unfolds before your eyes.
    Witness the Great Migration, as thousands
    of wildebeest and zebras navigate the plains
    in search of greener pastures. Encounter prides of lions,
    elegant cheetahs, and elusive leopards on exhilarating game drives.`
  },
  {
    day: `Day 5`,
    title: 'Night Safaris and Cultural Experiences',
    activity: `Experience the magic of night safaris,
    unveiling a different world of nocturnal creatures.
    Engage with local Maasai communities, gaining insights
    into their ancient traditions and vibrant way of life.`
  },
  {
    day: `Day 6`,
    title: 'Return with Unforgettable Memories',
    activity: `As your journey comes to a close,
    you'll carry with you the memories of
    breathtaking landscapes, captivating wildlife encounters,
    and the warmth of Kenyan hospitality.`
  },
]

