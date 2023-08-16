import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa6"
import { Link } from "react-router-dom";

const HotelModalWindow = () => {
  return (
    <Popover>
      <PopoverHandler>
        <button className="hotel-buttons font-poppins">
          View Package
        </button>
      </PopoverHandler>
      <PopoverContent className="z-[999] flex w-[28rem] overflow-hidden p-0">
        <div className="p-4">
          <Typography color="blue-gray" variant="h5" className="mb-2 font-poppins">
            $380 Per Person On a Double Occupancy.
          </Typography>
          <ul className="mb-2">
            <Typography color="blue-gray" className="mb-3">Package includes the following</Typography>
            <li className="flex items-acenter mb-2 font-poppins"><FaCheck />Meet up & assist at the Dubai airport</li>
            <li className="flex items-center mb-2 font-poppins"><FaCheck /> Daily breakfast at the hotel</li>
            <li className="flex items-center mb-2 font-poppins"><FaCheck />Return Dubai airport transfer</li>
            <li className="flex items-center mb-2 font-poppins"><FaCheck />Dubai half day city sightseeing tour</li>
            <li className="flex items-center mb-2 font-poppins"><FaCheck />Dhow cruise with dinner</li>
            <li className="flex items-center mb-2 font-poppins"><FaCheck />Desert safari with BBQ dinner dune bashing</li>
            <li className="flex items-center mb-2 font-poppins"><FaCheck />Belly dance & fire show</li>
          </ul>
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-1 capitalize font-poppins"
            >
              <Link to="/payment">
                Book Now
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
export default HotelModalWindow;
