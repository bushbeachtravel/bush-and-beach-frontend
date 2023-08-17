// import { Card } from "@material-tailwind/react";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import '../assets/styles/Blog.css';
import "yet-another-react-lightbox/styles.css";
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";
import photos from '../data/photos.js';

export default function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavigationMenu />
      <div className="gallery-container">
        <div className="my-gallery">
          <PhotoAlbum layout="columns" photos={photos} onClick={() => setOpen(true)} />
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={photos}
        />
      </div>
      <Footer />
    </>
  );
}
