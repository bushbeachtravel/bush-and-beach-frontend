import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { fetchBlogPostAsync } from "../../app/blogSlice";
import { currentUserAsync } from "../../app/authenticationSlice";
import Footer from "../footer/Footer";
import NavigationMenu from "../home-page/NavigationMenu";


const BlogList = () => {
  const userId = JSON.parse(window.localStorage.getItem("userId"));
  const posts = useSelector((state) => state.post.posts);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserAsync());
  }, []);

  useEffect(() => {
    dispatch(fetchBlogPostAsync(userId))
  }, [dispatch, posts.length, userId]);

  return (
    <>
      <NavigationMenu />
      <section className="blog-card-section flex gap-3">
        <div className="">
          {posts ? (
            <div className="blog-card w-1/2">
              {posts && posts.map((data) => {
                return data.body.blocks.map((block) => {
                  if (block.type === 'header') {
                    return (
                      <div className="card-title p-2" key={data.id}>
                        <Typography variant="lead" className="font-poppins font-bold">
                          <Link to={`/blog-detail/${data.id}`}>
                            <h1
                              dangerouslySetInnerHTML={{ __html: block.data.text }}
                            />
                          </Link> 
                        </Typography>
                      </div>
                    )
                  } else if (block.type === 'image') {
                    return (
                      <div key={block.id} className="image-card">
                        <img src={block.data.url} alt={block.data.caption} />
                        <p dangerouslySetInnerHTML={{ __html: block.data.caption }} />
                      </div>
                    );
                  } else if (block.type === 'paragraph') {
                    return (
                      <>
                        <div className="card-body p-2" key={block.id}>
                          <p
                            className="py-2 font-poppins"
                            dangerouslySetInnerHTML={{ __html: block.data.text }}
                          />
                        </div>
                      </>
                    );
                  }
                  return null;
                })
              })}
            </div>
          ) : (
            <p>No blog data found. </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default BlogList;