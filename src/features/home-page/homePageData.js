import localSafari from '../../assets/images/ndovu.jpg'
import beachHoliday from '../../assets/images/mombasa/coast.jpg';
import internationalTravel from '../../assets/images/paris.jpg';

const slides = [
  {
    image: localSafari,
    title: 'Local safaris',
    para: `We at Bush and Beach tours and safaris beleive a tour is more than just seeing the scenery. 
    It’s all about the whole experience and this business is driven by our mission statement.`,
    urlPath: 'trips',
  },
  {
    image: beachHoliday,
    title: 'Beach Holidays',
    para: `We have partnered with various reputable beach front hotels and resorts offering accommodation and other services to ensure our clients needs are met with the outmost magical experiences.`,
    urlPath: 'trips',
  },
  {
    image: internationalTravel,
    title: 'Internation travel',
    para: `We have partnered with other tour companies in various countries to enable our Kenyan esteemed clients have a seamless memorable travel experience. `,
    urlPath: 'trips',
  },
]
export default slides;
