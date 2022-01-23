import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const LoadMoreButton = ({ text, onClick }) => {
  return (
    <Button type="button" className="load-more-btn" onClick={onClick}>
      {text}
    </Button>
  );
};

LoadMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
