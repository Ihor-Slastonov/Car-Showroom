import { useState } from 'react';

import { FaStar } from 'react-icons/fa';
import { Star, RadioInput } from './VehicleCommentsAddRating.styled';

const VehicleCommentsAddRating = ({ value = 0, onChange }) => {
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = index => {
    onChange(index);
  };

  const handleMouseEnter = index => {
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const currentValue = index + 1;

        return (
          <label key={currentValue}>
            <RadioInput
              type="radio"
              name="rating"
              value={currentValue}
              onClick={() => handleClick(currentValue)}
            />
            <Star
              $filled={currentValue <= (hoverValue || value) ? 'true' : 'false'}
              onMouseEnter={() => handleMouseEnter(currentValue)}
              onMouseLeave={handleMouseLeave}
            >
              <FaStar />
            </Star>
          </label>
        );
      })}
    </div>
  );
};

export default VehicleCommentsAddRating;
