import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import wild from '../assets/wild.jpg';
import accomodation from '../assets/accomodation.jpg';
import hotel from '../assets/hotel.jpg';
import travel from '../assets/airpotTransfer.jpg';
import '../assets/styles/HomePage.css';

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
  );
}
export default BlogPost;

<Card className="max-w-[24rem] overflow-hidden">
  <CardHeader
    floated={false}
    shadow={false}
    color="transparent"
    className="m-0 rounded-none"
  >
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      alt="ui/ux review check"
    />
  </CardHeader>
  <CardBody>
    <Typography variant="h4" color="blue-gray">
      UI/UX Review Check
    </Typography>
    <Typography variant="lead" color="gray" className="mt-3 font-normal">
      Because it&apos;s about motivating the doers. Because I&apos;m here to
      follow my dreams and inspire others.
    </Typography>
  </CardBody>
  <CardFooter className="flex items-center justify-between">
    <div className="flex items-center -space-x-3">
      <Tooltip content="Natali Craig">
        <Avatar
          size="sm"
          variant="circular"
          alt="natali craig"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          className="border-2 border-white hover:z-10"
        />
      </Tooltip>
      <Tooltip content="Tania Andrew">
        <Avatar
          size="sm"
          variant="circular"
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          className="border-2 border-white hover:z-10"
        />
      </Tooltip>
    </div>
    <Typography className="font-normal">January 10</Typography>
  </CardFooter>
</Card>