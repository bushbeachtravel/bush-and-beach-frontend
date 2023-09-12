import PropTypes from 'prop-types'

const BlogParagraph = ({ block }) => (
  <div className="card-body p-2" key={block.id}>
    <p
      className="py-2 font-poppins"
      dangerouslySetInnerHTML={{ __html: block.data.text.substring(0, 100) + "...."}}
    />
  </div>
);
BlogParagraph.propTypes = {
  block: PropTypes.object.isRequired,
};
export default BlogParagraph;