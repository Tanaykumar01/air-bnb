import PropTypes from 'prop-types'; 
// Add prop validation
PlaceImg.propTypes = {
  place: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.string), // Expect an array of strings for photos
  }).isRequired,
  index: PropTypes.number,
  className: PropTypes.string,
};

import Image from "./Image.jsx";
export default function PlaceImg({place,index=0,className=null}) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <Image className={className} src={place.photos[index]} alt=""/>
  );
}