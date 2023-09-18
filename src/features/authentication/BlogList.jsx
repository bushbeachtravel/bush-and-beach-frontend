import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Spinner } from "@material-tailwind/react";
import { fetchBlogPostAsync } from "../../app/blogSlice";
import { currentUserAsync } from "../../app/authenticationSlice";
import Footer from "../footer/Footer";
import NavigationMenu from "../home-page/NavigationMenu";

import BlogImage from "../../utils/BlogImage";
import BlogCardTitle from "../../utils/BlogTitle";
import { Typography } from "@material-tailwind/react";

const BlogList = () => {
  const posts = useSelector((state) => state.post.posts);
  const status = useSelector((state) => state.post.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBlogPostAsync())
  }, [dispatch, posts.length]);

  return (
    <>
      <NavigationMenu />
      <section className="mt-10">
        {status === "loading" ? (
          <div className="flex justify-center mt-20">
            <Spinner className="h-16 w-16 text-gray-900/50" />
          </div>
        ) : (
          posts && posts.length ? (
            <div className="flex justify-center flex-wrap">
              {posts.map((data) => (
                <React.Fragment key={data.id}>
                  <div className="flex flex-col blog-card m-2">
                    {data.body.blocks.map((block) => {
                      if (block.type === "header") {
                        return <BlogCardTitle block={block} data={data} key={block.id} />;
                      } else if (block.type === "image") {
                        return <BlogImage block={block} data={data} key={block.id} />;
                      }
                      return null;
                    })}
                  </div>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div>
              <Typography variant="paragraph" className="font-poppins">
                No greetings
              </Typography>
            </div>
          )
        )}
        {/* {posts && posts.length ? (
          <div className="flex justify-center flex-wrap">
            {posts.map((data) => (
              <React.Fragment key={data.id}>
                <div className="flex flex-col blog-card m-2">
                  {data.body.blocks.map((block) => {
                    if (block.type === "header") {
                      return <BlogCardTitle block={block} data={data} key={block.id} />;
                    } else if (block.type === "image") {
                      return <BlogImage block={block} data={data} key={block.id} />;
                    }
                    return null;
                  })}
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div>
            <Typography variant="paragraph" className="font-poppins">
              No greetings
            </Typography>
          </div>
        )} */}
      </section>
      <Footer />
    </>
  );
};
export default BlogList;