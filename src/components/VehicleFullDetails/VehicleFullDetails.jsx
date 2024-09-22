import PropTypes from 'prop-types';

import MyImage from '../common/MyImage/MyImage';
import VehicleImagesCarousel from './VehicleImagesCarousel/VehicleImagesCarousel';

import { priceWithDiscount } from '../../utils/priceWithDiscount';
import {
  VehicleWrapper,
  VehicleId,
  VehicleTitleWrapper,
  VehicleTitle,
  VehicleDescription,
  VehiclePriceList,
  VehiclePriceTitle,
  VehicleSpecsList,
  VehicleSpecsTitle,
  VehicleShippingWrapper,
  VehicleShippingTitle,
  VehicleQrWrapper,
} from './VehicleFullDetails.styled';

const VehicleFullDetails = ({ vehicle }) => {
  const {
    id,
    sku,
    title,
    brand,
    description,
    price,
    discountPercentage,
    stock,
    availabilityStatus,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    meta,
    images,
  } = vehicle;

  const discountPrice = priceWithDiscount(price, discountPercentage);

  return (
    <>
      <VehicleWrapper>
        <VehicleImagesCarousel images={images} />
        {/* Vehicle header info */}
        <div>
          <VehicleId>
            <span>id: {id}</span> <span>sku: {sku}</span>
          </VehicleId>

          <VehicleTitleWrapper>
            <VehicleTitle>
              Brand: <span>{brand}</span>
            </VehicleTitle>
            <VehicleTitle as="h2">
              Model: <span>{title}</span>
            </VehicleTitle>
          </VehicleTitleWrapper>

          <VehicleTitle as="h3">Description:</VehicleTitle>
          <VehicleDescription>{description}</VehicleDescription>

          {/* Price and Stock */}
          <VehiclePriceList>
            <li>
              <VehiclePriceTitle as="p">
                Price: <span>{discountPrice} $</span>
              </VehiclePriceTitle>
            </li>
            <li>
              <VehiclePriceTitle as="p">
                Discount: <span>{discountPercentage} %</span>
              </VehiclePriceTitle>
            </li>
            <li>
              <VehiclePriceTitle as="p">
                Stock: <span>{stock} units</span>
              </VehiclePriceTitle>
            </li>
            <li>
              <VehiclePriceTitle as="p">
                Availability: <span>{availabilityStatus}</span>
              </VehiclePriceTitle>
            </li>
          </VehiclePriceList>

          {/* Specs */}
          <VehicleSpecsList>
            <li>
              <VehicleSpecsTitle as="p">
                Weight: <span>{weight} t</span>
              </VehicleSpecsTitle>
            </li>
            <li>
              <VehicleSpecsTitle as="p">
                Width: <span>{dimensions?.width} ft</span>
              </VehicleSpecsTitle>
            </li>
            <li>
              <VehicleSpecsTitle as="p">
                Height: <span>{dimensions?.height} ft</span>
              </VehicleSpecsTitle>
            </li>
            <li>
              <VehicleSpecsTitle as="p">
                Depth: <span>{dimensions?.depth} ft</span>
              </VehicleSpecsTitle>
            </li>
          </VehicleSpecsList>

          {/* Shipping and Qr code*/}
          <VehicleShippingWrapper>
            <div>
              <VehicleShippingTitle as="p">
                Warranty: <span>{warrantyInformation}</span>
              </VehicleShippingTitle>
              <VehicleShippingTitle as="p">
                Shipping: <span>{shippingInformation}</span>
              </VehicleShippingTitle>
              <VehicleShippingTitle as="p">
                Return Policy: <span>{returnPolicy}</span>
              </VehicleShippingTitle>
            </div>

            {meta?.qrCode && (
              <VehicleQrWrapper>
                <MyImage src={meta?.qrCode} alt="QR Code" />
              </VehicleQrWrapper>
            )}
          </VehicleShippingWrapper>
        </div>
      </VehicleWrapper>
    </>
  );
};

export default VehicleFullDetails;

VehicleFullDetails.propTypes = {
  vehicle: PropTypes.object,
};
