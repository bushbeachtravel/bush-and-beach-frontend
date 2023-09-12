import { Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import formatTimestamp from './dateFormat';
const BlogImage = ({ block, data }) => (
  <div key={block.id} className="image-card">
    <img src={block.data.url} alt={block.data.caption} />
    <div className="flex justify-between p-5">
      <div className="">
        <Typography variant="small" className="font-poppins font-bold">
          Published Date
        </Typography>
        <Typography variant="small" className="font-poppins">
          {formatTimestamp(data.created_at)}
        </Typography>
      </div>
      <div className="">
        <Typography variant="small" className="font-poppins font-bold">
          Authored by
        </Typography>
        <Typography variant="small" className="font-poppins">
          {data.author.name ? data.author.name : 'Ananoymous'}
        </Typography>
      </div>
    </div>



  </div>
);
BlogImage.propTypes = {
  block: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}
export default BlogImage;

