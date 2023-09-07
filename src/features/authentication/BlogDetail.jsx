import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  IconButton,
  Button
} from '@material-tailwind/react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { useParams } from "react-router-dom";

import Footer from "../footer/Footer";
import { fetchBlogPostAsync } from '../../app/blogSlice';
import { fetchAllCommentsAsync, deleteCommentAsync } from '../../app/commentSlice';
import { currentUserAsync } from '../../app/authenticationSlice';
import Comment from '../blog/Comment';
import NavigationMenu from "../home-page/NavigationMenu";
import formatTimestamp from '../../utils/dateFormat';
import ConfirmDeleteModal from '../../utils/ConfirmDeleteModal';


const BlogDetail = () => {
  const posts = useSelector((state) => state.post.posts);
  const userId = JSON.parse(window.localStorage.getItem("userId"));
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const comments = useSelector((state) => state.comment.comments);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteCommentData, setDeleteCommentData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id, 10));

  useEffect(() => {
    const data = {
      user_id: userId,
      post_id: id
    }
    dispatch(fetchAllCommentsAsync(data))
  }, [dispatch, id, userId, comments.length]);

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [])

  useEffect(() => {
    dispatch(fetchBlogPostAsync(userId))
  }, [dispatch, userId, posts.length])

  const handleDeleteComment = (commentId) => {
    if (loggedIn) {
      const data = {
        user_id: userId,
        post_id: parseInt(id, 10),
        comment_id: commentId
      }
      setDeleteCommentData({
        ...data,
      })

      setOpenDeleteModal(true);
    } else {
      return
    }
  }

  const handleConfirmDelete = () => {
    dispatch(deleteCommentAsync(deleteCommentData));
    setOpenDeleteModal(false);
  }
  const handleCancelDelete = () => {
    setOpenDeleteModal(false);
  }

  return (
    <>
      <NavigationMenu />
      <section className="blog-detail-section">
        <div className="editor right p-5">
          <div className="right-container">
            {post && post.body.blocks.map((data) => {
              if (data.type === 'header') {
                return (
                  <>
                    <p>{formatTimestamp(post.created_at)}</p>
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
                  <div className="blog-body" key={data.id}>
                    <p dangerouslySetInnerHTML={{ __html: data.data.text }} />
                  </div>
                )
              }
            })}
            <br />
            <div className="sharing-icons">
              <IconButton className="rounded bg-[#2b90ec] hover:shadow-[#2b90ec]/20 focus:shadow-[#2b90ec]/20 active:shadow-[#2b90ec]/10">
                <FaFacebook size={30} />
              </IconButton>
              <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                <FaTwitter size={30} />
              </IconButton>
              <IconButton className="rounded bg-[#2e72d7] hover:shadow-[#2e72d7]/20 focus:shadow-[#2e72d7]/20 active:shadow-[#2e72d7]/10">
                <FaLinkedin size={30} />
              </IconButton>
            </div>
            <div className="py-5 font-poppins">
              {comments.length ? (
                comments.map((comment) => (
                  <div key={comment.id} className="flex justify-evenly">
                    <Typography>
                      {comment.text} by
                    </Typography>
                    <Typography>
                      {comment.author_email} on {formatTimestamp(comment.time_created)}
                    </Typography>
                    {loggedIn && userId === comment.author_id && (
                      <Button
                        variant="text"
                        color="red"
                        size="sm"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        Delete
                      </Button>
                    )}
                  </div>
                ))
              ) : (
                <Typography variant="paragraph" className="font-poppins">
                  This post has no comment. Be the first one to leave a comment
                </Typography>
              )}
            </div>
            <div className="comment-section">
              <Typography variant="small" className="font-poppins font-bold">
                Leave a comment
              </Typography>
              <Comment postId={id} />
            </div>
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
                                <Typography variant="h6" color="blue-gray">
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
        {openDeleteModal && (
          <ConfirmDeleteModal
            handleCancelDelete={handleCancelDelete}
            handleConfirmDelete={handleConfirmDelete}
          />
        )}
      </section >
      <Footer />
    </>
  );
};
export default BlogDetail;


