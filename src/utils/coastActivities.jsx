import { Typography } from "@material-tailwind/react";
import { FaHeart } from "react-icons/fa6";
import PropTypes from 'prop-types';


const CoastActivities = ({ activities, location }) => (
  <section className="activities-section">
    <Typography variant="paragraph" className="font-poppins font-bold py-10 mx-20">
      Activities at {location}
    </Typography>
    <div className="activities-section flex flex-wrap justify-center">
      {activities.map((item, index) => (
        <div className="w-96 coast-container" key={index}>
          <div className="content">
            <figure className="relative h-96 w-full">
              <div className="content-overlay"></div>
              <img
                className="h-96 w-full object-cover object-center content-image"
                src={item.src}
                alt={item.title}
              />
              <div className="flex items-center justify-between content-details fadeIn-bottom">
                <div>
                  <Typography variant="h6" color="white" className="content-title font-poppins" >
                    {item.title}
                  </Typography>
                </div>
                <div>
                  <Typography color="gray" className="font-normal content-title">
                    <FaHeart size={23} />
                  </Typography>
                </div>
              </div>
            </figure>
          </div>
        </div>
      ))}
    </div>
  </section>
);

CoastActivities.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.string.isRequired,
}
export default CoastActivities;