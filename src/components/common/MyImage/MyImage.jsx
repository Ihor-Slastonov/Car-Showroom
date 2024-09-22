import PropTypes from 'prop-types';

import { Img } from 'react-image';

import MyLoader from '../MyLoader/MyLoader';

const MyImage = ({
  src = 'https://via.placeholder.com/400x300',
  alt = 'image',
  loaderSize = 40,
}) => {
  return (
    <>
      <Img
        src={src}
        alt={alt}
        loader={<MyLoader size={loaderSize} />}
        onError={e => {
          e.target.src = 'https://via.placeholder.com/400x300';
        }}
      />
    </>
  );
};

export default MyImage;

MyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  loaderSize: PropTypes.number,
};
