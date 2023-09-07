const formatTimestamp = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const date = new Date(dateString);
  return date.toLocaleString('en-US', options);
};
export default formatTimestamp;
