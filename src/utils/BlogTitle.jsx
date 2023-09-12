import { Typography } from '@material-tailwind/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BlogCardTitle = ({ block, data }) => (
  <div className="card-title p-2">
    <Typography variant="lead" className="font-poppins font-bold">
      <Link to={`/blog-detail/${data.id}`}>
        <h1
          dangerouslySetInnerHTML={{ __html: block.data.text }}
          className="font-poppins"
        />
      </Link>
    </Typography>
  </div>
);

BlogCardTitle.propTypes = {
  block: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}
export default BlogCardTitle;