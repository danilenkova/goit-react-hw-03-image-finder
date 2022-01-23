import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ collection, onClick }) => {
  return (
    <Gallery>
      {collection.map(image => {
        return <ImageGalleryItem key={image.id} data={image} onClick={onClick} />;
      })}
    </Gallery>
  );
};

ImageGallery.prototype = {
  collection: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
