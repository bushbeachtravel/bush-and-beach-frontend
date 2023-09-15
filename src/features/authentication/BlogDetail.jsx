import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Button
} from '@material-tailwind/react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Footer from "../footer/Footer";
import { fetchBlogPostAsync, deleteBlogPostAsync } from '../../app/blogSlice';
import { currentUserAsync } from '../../app/authenticationSlice';
import NavigationMenu from "../home-page/NavigationMenu";
import formatTimestamp from '../../utils/dateFormat';
import ConfirmDeleteModal from '../../utils/ConfirmDeleteModal';


const BlogDetail = () => {
  const posts = useSelector((state) => state.post.posts);
  const userId = JSON.parse(window.localStorage.getItem("userId"));
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [openDeleteBlogModal, setOpenDeleteBlogModal] = useState(false);
  const [deletePostData, setDeletePostData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = posts.find((blog) => blog.id === parseInt(id, 10));

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [dispatch, loggedIn])

  useEffect(() => {
    dispatch(fetchBlogPostAsync())
  }, [dispatch])

  
  const handleDeleteBlog = () => {
    if (loggedIn) {
      const data = {
        user_id: userId,
        post_id: parseInt(id, 10),
      }
      setDeletePostData({
        ...data,
      })
      setOpenDeleteBlogModal(true);
    }
  }

  const confirmDeleteBlog = () => {
    dispatch(deleteBlogPostAsync(deletePostData));
    setOpenDeleteBlogModal(false);
    navigate('/blog-list');
  }

  const cancelDeleteBlog = () => {
    setOpenDeleteBlogModal(false);
  }

  return (
    <>
      <NavigationMenu />
      <section className="blog-detail-section">
        <div className="right p-5">
          <div className="right-container">
            {post && post.body.blocks.map((data) => {
              if (data.type === 'header') {
                return (
                  <>
                    <div className="flex justify-between p-5">
                      <div className="date">
                        <Typography variant="paragraph" className="font-poppins">
                          {formatTimestamp(post.created_at)}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="paragraph" className="font-poppins">
                          Post by {post.author.name ? post.author.name : 'Anonymous'}
                        </Typography>
                      </div>
                    </div>

                    <Typography
                      key={data.id}
                      className="text-center font-poppins font-bold"
                      dangerouslySetInnerHTML={{ __html: data.data.text }}
                      posts />
                  </>
                )
              } else if (data.type === 'image') {
                return (
                  <div className="blog-image-container" key={data.id}>
                    <img
                      src={data.data.url}
                      alt={data.data.caption}
                    />
                  </div>
                )
              } else if (data.type === 'paragraph') {
                return (
                  <div className="blog-body py-10" key={data.id}>
                    <p dangerouslySetInnerHTML={{ __html: data.data.text }} className="font-poppins" />
                  </div>
                )
              }
            })}
            {loggedIn && (
              <div className="flex gap-3">
                <Button
                  className="font-poppins"
                  variant="text"
                  color="red"
                  size="sm"
                  onClick={() => handleDeleteBlog()}
                >
                  Delete
                </Button>
                <Button
                  className="font-poppins"
                  variant="text"
                  size="sm"
                >
                  <Link to={`/blog-update/${id}`}>Edit</Link>
                </Button>
              </div>
            )}
            <br />
          </div>
        </div>
        <div className="left">
          <div className="left-container">
            <Typography variant="lead" className="font-poppins font-bold blog-heading">
              Popular posts
            </Typography>
            <br />
            <Card className="blog-list">
              <List>
                {posts.map((data) => {
                  return data.body.blocks.map((post) => {
                    if (post.type === 'image') {
                      return (
                        <>
                          <Link to={`/blog-detail/${data.id}`}>
                            <ListItem>
                              <ListItemPrefix>
                                <Avatar variant="circular" alt={post.data.caption} src={post.data.url} />
                              </ListItemPrefix>
                              <div>
                                <Typography variant="h6" color="blue-gray" className="font-poppins">
                                  Tania Andrew
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                  Software Engineer @ Material Tailwind
                                </Typography>
                              </div>
                            </ListItem>
                          </Link>
                        </>
                      )
                    }
                  })
                })}
              </List>
            </Card>
          </div>
        </div>
        {openDeleteBlogModal && (
          <ConfirmDeleteModal
            handleCancelDelete={cancelDeleteBlog}
            handleConfirmDelete={confirmDeleteBlog}
            text="post"
          />
        )}
      </section >
      <Footer />
    </>
  );
};
export default BlogDetail;


