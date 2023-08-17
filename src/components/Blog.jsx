import {
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import '../assets/styles/HomePage.css';
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";
import blogs from "../data/blogPostData";

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