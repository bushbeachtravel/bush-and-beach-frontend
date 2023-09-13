import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const dispatch = useDispatch();
  const [index, setIndex] = useState(-1);

  const pictures = [];
  const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

  gallery.map((data) => {
    const aspectRatioWidth = 16;
    const aspectRatioHeight = 11;
    let randomHeight = Math.floor(Math.random() * (1440 - 695 + 1)) + 695;
    randomHeight = (1080 / aspectRatioWidth ) * aspectRatioHeight;
    console.log(randomHeight);
    pictures.push({
      src: `http://localhost:3000/${data.image}`,
      width: 1080,
      height: randomHeight,
    });
  });
  console.log(pictures);

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
  }, [dispatch]);

  return (
    <>
      <NavigationMenu />
      {gallery ? (
        <div className="gallery-container">
          <div className="my-gallery">
            <PhotoAlbum
              layout="rows"
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
      ) : (
        <div className="mt-20 p-10">
          {loggedIn ? (
            <Typography variant="lead" className="font-poppins text-center">
              No photos yet!!
              <Link to="/photo-upload">Upload New Photos</Link>
            </Typography>
          ) : (
            <Typography variant="lead" className="font-poppins text-center">
              No Photos in the gallery.
            </Typography>
          )}

        </div>

      )}

      <Footer />
    </>
  );
}
