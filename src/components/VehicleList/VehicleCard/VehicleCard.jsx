import PropTypes from 'prop-types';

import MyImage from '../../common/MyImage/MyImage';
import RatingStars from '../../RatingStars/RatingStars';

import { priceWithDiscount } from '../../../utils/priceWithDiscount';

import {
  CardWrapper,
  CardImageWrapper,
  CardDiscount,
  CardRatingWrapper,
  CardInfoWrapper,
  CardTitle,
  CardTitleSecondary,
  CardText,
  CardPriceOld,
  CardFinalPrice,
  StyledLink,
} from './VehicleCard.styled';

const VehicleCard = ({ vehicle }) => {
  const {
    title,
    brand,
    thumbnail,
    price,
    discountPercentage,
    description,
    rating,
  } = vehicle;

  const finalPrice = priceWithDiscount(price, discountPercentage, 2);

  return (
    <CardWrapper>
      <CardImageWrapper>
        <MyImage src={thumbnail} alt={title} />
      </CardImageWrapper>

      <CardDiscount>
        <span>discount</span>-{discountPercentage}%
      </CardDiscount>

      <CardRatingWrapper>
        <RatingStars rating={rating} />
      </CardRatingWrapper>

      <CardInfoWrapper>
        <CardTitle>Brand: {brand}</CardTitle>
        <CardTitleSecondary>Model: {title}</CardTitleSecondary>
        <CardText>{description}</CardText>

        <div>
          <p>
            Price: <CardPriceOld>{price} $</CardPriceOld>
          </p>

          <CardFinalPrice>{finalPrice} $</CardFinalPrice>
        </div>

        <StyledLink
          to={{ pathname: `/vehicles/${vehicle.id}`, state: { vehicle } }}
        >
          See details
        </StyledLink>
      </CardInfoWrapper>
    </CardWrapper>
  );
};

export default VehicleCard;

VehicleCard.propTypes = {
  vehicle: PropTypes.object.isRequired,
};
