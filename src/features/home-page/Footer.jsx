import { Typography } from "@material-tailwind/react";
import {
  FaTwitter, FaFacebook, FaInstagramSquare,
  FaLinkedin
} from 'react-icons/fa'
import { Link } from "react-router-dom";
import '@styling/Blog.css';
import LINKS from "@data/footerData";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full mt-auto">
      <div className="footer-line mx-auto w-full max-w-7xl px-8">
        <div className="flex justify-between gap-3 flex-wrap">
          <Typography variant="h5" className="mb-6 font-poppins">
            Bush & Beach
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-6">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-bold opacity-40 font-poppins mt-5"
                >
                  {title}
                </Typography>
                {items.map((item) => (
                  <li key={item.title}>

                    <Link
                      to={`/${item.url}`}
                      className="py-1.5 mt-3 font-normal transition-colors hover:text-blue-gray-900 font-poppins link-color"
                    >
                      {item.title}
                    </Link>
                    <br />
                  </li>

                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 font-poppins"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Bush & Beach</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://www.facebook.com/www.beachtravel.co.ke?mibextid=ZbWKwL"
              className="opacity-80 transition-opacity hover:opacity-100"
              target="_blank"
            >
              <FaFacebook />
            </Typography>
            {/* <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaTwitter />
            </Typography> */}
            <Typography
              as="a"
              href="https://instagram.com/bushnbeach_officialke?igshid=MzMyNGUyNmU2YQ=="
              className="opacity-80 transition-opacity hover:opacity-100"
              target="_blank"
            >
              <FaInstagramSquare />
            </Typography>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/bush-beach-b35b95299/"
              className="opacity-80 transition-opacity hover:opacity-100"
              target="_blank"
            >
              <FaLinkedin />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer