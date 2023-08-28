import {
  CardHeader, CardBody, Typography, CardFooter, Card,
  Button
} from "@material-tailwind/react";
import { MdWbSunny, MdModeNight } from 'react-icons/md'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SafariCard = ({ tourDestination }) => (
  <section className="safari-section w-full p-7 flex justify-center flex-wrap gap-3">
    {tourDestination.map((items, index) => (
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
);

SafariCard.propTypes = {
  tourDestination: PropTypes.object.isRequired,
}
export default SafariCard;
