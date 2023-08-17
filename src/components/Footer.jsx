import { Typography } from "@material-tailwind/react";
import { FaTwitter, FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import '../assets/styles/Blog.css';

const LINKS = [
  {
    title: "Our Services",
    items: ["Air Ticketing", "Travel Adisory", "Airport Transfers", "Visa Processing", "Hotel Booking & Accomodation", "Conference Packages", "Safari, Game Drives"],
  },
  {
    title: "Company",
    items: ["About us", "Careers"],
  },
  {
    title: "Resource",
    items: ["Blog", "Gallery"],
  },
];
 
const currentYear = new Date().getFullYear();
 
const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="p-5 mb-6 font-poppins">
            Bush & Beach
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-bold opacity-40 font-poppins mt-5"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900 font-poppins"
                    >
                      {link}
                    </Typography>
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
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaFacebook />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
             <FaTwitter />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaInstagramSquare />
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaLinkedin />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer