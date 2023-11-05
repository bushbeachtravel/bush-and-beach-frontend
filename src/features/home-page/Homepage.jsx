import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavigationMenu from "@home-page/HomeNavbar";
import slides from "@data/homePageData";

export const HomePage = () => {

  return (
    <>
      <NavigationMenu />
      <Outlet />
      <Carousel
        className="carousel"
        transition={{ duration: 2 }}
        autoplay={true}
        autoplayinterval={5000}
        loop={true}
      >
        {slides.map((carousel, index) => (
          <div
            key={index}
            className="relative h-full w-full slide"
          >
            <img
              src={carousel.image}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl font-poppins"
                >
                  {carousel.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 font-poppins"
                >
                  {carousel.para}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" className="carousel-btn font-poppins" color="blue">
                    <Link to={carousel.urlPath.toLowerCase()}>
                      Explore
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  )
};
export default HomePage;


