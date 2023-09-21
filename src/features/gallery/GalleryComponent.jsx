import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Typography } from "@material-tailwind/react";

import { fetchPhotosAsync } from "../../app/gallerySlice";
import Footer from "../footer/Footer";
import NavigationMenu from "../home-page/NavigationMenu";

import '../../assets/styles/Blog.css';


export default function Gallery() {
  const gallery = useSelector((state) => state.photos.photos);
  const status = useSelector((state) => state.photos.status);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch();
  const [index, setIndex] = useState(-1);

  const pictures = [];
  const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

  gallery.map((data) => {
    const aspectRatioWidth = 16;
    const aspectRatioHeight = 11;
    let randomHeight = Math.floor(Math.random() * (1440 - 695 + 1)) + 695;
    randomHeight = (1080 / aspectRatioWidth) * aspectRatioHeight;
    pictures.push({
      src: `https://bush-and-beach-backend-server.onrender.com/${data.image}`,
      width: 1080,
      height: randomHeight,
    });
  });

  const picha = pictures.map((photo) => {
    return {
      src: photo.src,
      width: photo.width,
      height: photo.height,
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: photo.src,
          width: breakpoint,
          height,
        }
      })
    }
  })

  useEffect(() => {
    dispatch(fetchPhotosAsync())
  }, [dispatch, gallery.length]);

  return (
    <>
      <NavigationMenu />
      {status === "loading" ? (
        <div className="flex justify-center mt-20">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      ) : (
        gallery.length ? (
          <>
            <div className="gallery-container">
              <div className="my-gallery">
                <PhotoAlbum
                  layout="columns"
                  photos={picha}
                  targetRowHeight={150}
                  onClick={({ index }) => setIndex(index)}
                />
              </div>
              <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={picha}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                index={index}
              />
            </div>
          </>
        ) : (
          loggedIn && user.admin ? (
            <div className="flex justify-center items-center font-poppins mt-20">
              <Link to="/photo-upload" color="blue">
                The Gallery is empty!!!!
                <Typography variant="paragraph" color="blue" className="font-poppins">
                  upload new photos
                </Typography>
              </Link>
            </div>
          ) : (
            <div className="flex justify-center mt-20">
              <Typography variant="lead" className="font-poppins font-bold">
                The photo gallery is currently empty!
              </Typography>
            </div>
          )
        )
      )}
      <Footer />
    </>
  );
}
