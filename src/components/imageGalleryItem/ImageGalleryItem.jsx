import PropTypes from 'prop-types';
import { GalleryItem, GalleryPhoto } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ data, onClick }) => {
  return (
    <GalleryItem id={data.id} className="gallery-item" onClick={() => onClick(data)}>
      <GalleryPhoto src={data.webformatURL} alt={data.tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.prototype = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
