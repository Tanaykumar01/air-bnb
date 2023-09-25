import PropTypes from 'prop-types';
// Add prop validation
Image.propTypes = {
  src: PropTypes.string.isRequired, // Ensure 'src' is a required string prop
};

export default function Image({src,...rest}) {
    src = src && src.includes('https://')
      ? src
      : 'http://localhost:4000/uploads/'+ src;
    return (
      <img {...rest} src={src} alt={''} />
    ); 
  }

