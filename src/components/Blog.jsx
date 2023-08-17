import {
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import wild from '../assets/wild.jpg';
import accomodation from '../assets/accomodation.jpg';
import hotel from '../assets/hotel.jpg';
import travel from '../assets/airpotTransfer.jpg';
import '../assets/styles/HomePage.css';
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";

const blogs = [
  {
    image: accomodation,
    title: 'The Masaai Mara',
    body: `We at Bush and Beach tours and safaris beleive a tour is more than just seeing the scenery. 
    It’s all about the whole experience and this business is driven by our mission statement.`,
    author: 'kennankole',
    date: 'July 12, 2023'
  },
  {
    image: hotel,
    title: 'The Masaai Mara',
    body: `We at Bush and Beach tours and safaris beleive a tour is more than just seeing the scenery. 
    It’s all about the whole experience and this business is driven by our mission statement.`,
    author: 'kennankole',
    date: 'July 22, 2023'
  },
  {
    image: wild,
    title: 'Serengeti',
    body: `We at Bush and Beach tours and safaris beleive a tour is more than just seeing the scenery. 
    It’s all about the whole experience and this business is driven by our mission statement.`,
    author: 'kennankole',
    date: 'July 18, 2023'
  },
  {
    image: travel,
    title: 'Nairobi National Park',
    body: `We at Bush and Beach tours and safaris beleive a tour is more than just seeing the scenery. 
    It’s all about the whole experience and this business is driven by our mission statement.`,
    author: 'kennankole',
    date: 'July 28, 2023'
  },
]
const BlogPost = () => {
  return (
    <>
      <NavigationMenu />
      <section className="blog-card-section">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="image-card">
              <img src={blog.image} />
            </div>
            <div className="card-title p-2">
              <Typography variant="lead" className="font-poppins font-bold">
                <Link to='/detail'>
                  {blog.title}
                </Link>
              </Typography>
            </div>
            <div className="blog-details p-2">
              <div className="author">
                <Typography className="font-poppins" variant="small">
                  {blog.author}
                </Typography>
              </div>
              <div className="date">
                <Typography className="space-y-5 font-poppins" variant="small">
                  {blog.date}
                </Typography>
              </div>
            </div>
            <div className="card-body p-2">
              <Typography className="py-2 font-poppins" variant="small">
                {blog.body}
              </Typography>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
export default BlogPost;