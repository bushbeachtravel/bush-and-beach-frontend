import { Typography } from "@material-tailwind/react";
import { FaHeart } from "react-icons/fa6";
import PropTypes from 'prop-types';


const CoastActivities = ({ activities, location }) => (
  <section className="activities-section">
    <Typography variant="lead" className="font-poppins font-bold mx-20">
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
              <div className="content-details fadeIn-bottom">
                <Typography variant="h5" color="white" className="content-title" >
                  {item.title}
                </Typography>
                <Typography color="gray" className="mt-2 font-normal content-title">
                  <FaHeart />
                </Typography>
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