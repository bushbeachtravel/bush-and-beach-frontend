import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa6"
import { Link } from "react-router-dom";

const LukenyaModalWindow = () => {
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
            Rates Per Head
          </Typography>
          <div className="flex space-x-20">
            <div className="flex flex-col">
              <Typography color="blue-gray" variant="h7" className="font-poppins">Full Board Charges</Typography>
              <ul className="mb-2">
                <li className="flex items-center mb-2 font-poppins"><FaCheck />Double room $240</li>
                <li className="flex items-center mb-2 font-poppins"><FaCheck />Single room $175</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <Typography color="blue-gray" variant="h7" className="font-poppins">Half Board Charges</Typography>
              <ul className="mb-2">
                <li className="flex items-center mb-2 font-poppins"><FaCheck />Double room $208</li>
                <li className="flex items-center mb-2 font-poppins"><FaCheck />Single room $160</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Typography color="blue-gray" variant="h7" className="font-poppins">Other Offers</Typography>
            <ul className="mb-2">
              <li className="flex items-center mb-2 font-poppins"><FaCheck />Single Bed only $175</li>
              <li className="flex items-center mb-2 font-poppins"><FaCheck />Single Bed & Breakfast $198</li>
              <li className="flex items-center mb-2 font-poppins"><FaCheck />Double Bed only $150</li>
              <li className="flex items-center mb-2 font-poppins"><FaCheck />Double Bed & Breakfast $170</li>
              <li className="flex items-center mb-2 font-poppins">
                <FaCheck />
                Conference Facilities & Team Building ground available on Request
              </li>
            </ul>
          </div>

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
export default LukenyaModalWindow;
