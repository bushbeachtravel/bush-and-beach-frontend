import accomodation from '../assets/images/accomodation.jpg'
import airpotTransfer from '../assets/images/airpotTransfer.jpg'
import airTravel from '../assets/images/airTravel.jpg'
import conference from '../assets/images/conference.jpg'
import safariPackage from '../assets/images/ndovu.jpg'
import wild from '../assets/images/wild.jpg'
import travelling from '../assets/images/travelling.jpg'

const slides = [
  {
    image: accomodation,
    title: 'Hotel Booking',
    para: `We at Bush and Beach tours and safaris beleive a tour is more than just seeing the scenery. 
    It’s all about the whole experience and this business is driven by our mission statement.`,
    urlPath: 'hotels',
  },
  {
    image: conference,
    title: 'Conference Packages',
    para: `Bush and Beach have partnered with various hotels 
    and conference centers to offer the best 
    conference packages across East Africa.`,
    urlPath: 'hotels',
  },
  {
    image: airTravel,
    title: 'Air Ticketing',
    para: `We are an accredited Travel agent that sells 
    both local and international air tickets. 
    We work closely with all the airlines providing us 
    with a chance to advice and give our clients 
    the best available rates from different airlines..`,
    urlPath: 'services',
  },
  {
    image: airpotTransfer,
    title: 'Airport transfers',
    para: `Landing in a new airport at any time and finding 
    your way to the expected destination can be challenging and hectic. 
    We at Bush and Beach have partnered with different travel 
    agents across the globe to facilitate smooth and reliable 
    transfers from the airport to the hotels`,
    urlPath: 'services'
  },
  {
    image: travelling,
    title: 'Travel Advisories',
    para: `We listen, evaluate and undertand the needs of our clients 
    and advice with the best of our knowledge to meet all our 
    customer’s expectations and requirements.`,
    urlPath: 'services'
  },
  {
    image: wild,
    title: 'Visa processing',
    para: `Get help with your visa processing`,
    urlPath: 'services',
  },
  {
    image: safariPackage,
    title: 'Safari & Game Drives',
    para: `We offer special game drive packages to various organizations, 
    groups or individual that are fun packed and memorable. 
    Our dedicated team has taken time to know the country and 
    the world thus able to provide well selected safari and game drive packages.`,
    urlPath: 'hotels'
  },
]
export default slides;
