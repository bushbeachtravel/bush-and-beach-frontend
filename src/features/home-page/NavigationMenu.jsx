import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import '../../assets/styles/HomePage.css';
import '../../assets/styles/Navbar.css';

const NavigationMenu = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-poppins text-blue-50 font-semibold"
      >
        <Link to="/trips" className="color flex items-center">
          Safari Packages
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-normal font-poppins text-blue-50 font-semibold"
      >
        <Link to="/about" className="color flex items-center font-poppins">
          About us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-poppins text-blue-50 font-semibold"
      >
        <Link to="/gallery" className="color flex items-center">
          Gallery
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-poppins text-blue-50 font-semibold"
      >
        <Link to="/blog" className="color flex items-center">
          Blog
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-poppins text-blue-50 font-semibold"
      >
        <Link to="/contact" className="color flex items-center">
          Contact us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="navbar">
      <Navbar className="h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-none">
        <div className="container mx-auto flex items-center justify-between text-blue-50">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-poppins text-blue-50 font-semibold"
          >
            <Link to="/" className="color">
              Bush & Beach
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationMenu;