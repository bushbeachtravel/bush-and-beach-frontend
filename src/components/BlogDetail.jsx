import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
} from '@material-tailwind/react';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import '../assets/styles/Blog.css';
import wild from '../assets/wild.jpg';
const BlogDetailView = () => (
  <section className="blog-detail-section">
    <div className="right p-5">
      <div className="right-container">
        <Typography variant="lead" className="text-center font-poppins font-bold">
          Masaai Mara
        </Typography>

        <div className="blog-image-container">
          <img src={wild} />
        </div>
        <br />
        <div className="blog-body">
          <Typography variant="small" className="font-poppins my-3">
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit in vulputate velit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
            iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
            in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
            esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
            et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
          </Typography>
        </div>
        <div className="sharing-icons">
          <FaFacebook size={30} className="facebook-icon" />
          <FaTwitter size={30} className="twitter-icon" />
          <FaLinkedin size={30} className="linkedin-icon" />
        </div>
      </div>
    </div>
    <div className="left">
      <div className="left-container">
        <Typography variant="lead" className="font-poppins font-bold">
          Popular posts
        </Typography>
        <br />
        <Card className="w-96">
          <List>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src={wild} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Tania Andrew
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="alexander" src={wild} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Alexander
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Backend Developer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="emma" src={wild} />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Emma Willever
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  UI/UX Designer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  </section>
);
export default BlogDetailView;