import PropTypes from 'prop-types';
import { Img } from 'react-image';

import MyLoader from '../MyLoader/MyLoader';

const MyImage = ({
  src = 'https://via.placeholder.com/400x300',
  alt = 'image',
}) => {
  return (
    <>
      <Img
        src={src}
        alt={alt}
        loader={<MyLoader />}
        onError={e => {
          e.target.src = 'https://via.placeholder.com/400x300';
        }}
      />
    </>
  );
};

export default MyImage;

MyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
