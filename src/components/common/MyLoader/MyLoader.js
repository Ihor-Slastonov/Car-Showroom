import { BounceLoader } from 'react-spinners';
import { LoaderWrapper } from './MyLoader.styled';

const MyLoader = ({ size = 40, color = '#7d6457' }) => {
  return (
    <LoaderWrapper>
      <BounceLoader color={color} size={size} aria-label="Loading Spinner" />
    </LoaderWrapper>
  );
};

export default MyLoader;
