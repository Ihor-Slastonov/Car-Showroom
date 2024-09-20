import { FaRegStar, FaStar } from 'react-icons/fa';
import {
  StarRatingContainer,
  StarOutline,
  StarColoredContainer,
  StarColored,
} from './RatingStars.styled';

const RatingStars = ({ rating = 0, starLimit = 5 }) => {
  const ratingWidth = (rating / starLimit) * 100;
  return (
    <StarRatingContainer>
      {/* Обведенные звезды */}
      {Array(starLimit)
        .fill(0)
        .map((_, index) => (
          <StarOutline key={index}>
            <FaRegStar />
          </StarOutline>
        ))}

      {/* Залитые звезды */}
      <StarColoredContainer style={{ width: `${ratingWidth}%` }}>
        {Array(starLimit)
          .fill(0)
          .map((_, index) => (
            <StarColored key={index}>
              <FaStar />
            </StarColored>
          ))}
      </StarColoredContainer>
    </StarRatingContainer>
  );
};

export default RatingStars;
