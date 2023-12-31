import localSafari from '@images/ndovu.jpg'
import beachHoliday from '@images/mombasa/coast.jpg';
import internationalTravel from '@images/paris.jpg';
import zanzibar from '@images/zanzibar/zanzibar.jpg'
import rwanda from '@images/rwanda.jpg'

const slides = [
  {
    image: localSafari,
    title: 'Local Safaris.',
    para: `We at Bush and Beach tours and safaris beleive a tour is more than just seeing the scenery. 
    It’s all about the whole experience and this business is driven by our mission statement.`,
    urlPath: 'kenya',
  },
  {
    image: beachHoliday,
    title: 'Kenya Beach Holidays',
    para: `We have partnered with various reputable beach front hotels and resorts offering accommodation and other services to ensure our clients needs are met with the outmost magical experiences.`,
    urlPath: 'coast',
  },
  {
    image: zanzibar,
    title: 'Zanzibar Beach Holidays',
    para: `Our Zanzibar day tours offer a perfect opportunity to explore the island's breathtaking landscapes, exotic beaches, famous spice farms, history and diverse wildlife and culture.`,
    urlPath: 'zanzibar',
  },
  {
    image: rwanda,
    title: 'Rwanda/Uganda Gorilla tracking',
    para: `We plan for our client's holiday to Rwanda/Uganda to experience and see gorillas in their natural habitats.`,
    urlPath: 'rwanda-uganda',
  },
  {
    image: internationalTravel,
    title: 'International Travel',
    para: `We have partnered with other tour companies in various countries to enable our Kenyan esteemed clients to have a seamless memorable travel experience. `,
    urlPath: 'international',
  },
]
export default slides;
