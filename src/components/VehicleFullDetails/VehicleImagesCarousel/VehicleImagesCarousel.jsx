import { useState } from 'react';
import PropTypes from 'prop-types';

import { Navigation, Thumbs, Pagination } from 'swiper/modules';

import MyImage from '../../common/MyImage/MyImage';

import {
  CarouselContainer,
  StyledSwipper,
  StyledSlide,
  ThumbsSwiper,
  ThumbsSlide,
} from './VehicleImagesCarousel.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const VehicleImagesCarousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <CarouselContainer>
      <StyledSwipper
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
      >
        {images?.map((image, idx) => (
          <StyledSlide key={idx}>
            <MyImage src={image} alt={`vehicle-image-${idx}`} />
          </StyledSlide>
        ))}
      </StyledSwipper>

      <ThumbsSwiper
        modules={[Thumbs]}
        onSwiper={swiper => {
          setThumbsSwiper(swiper);
          swiper.update();
        }}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        slidesPerView={3}
        watchOverflow={true}
        onSlideChange={() => thumbsSwiper.update()}
      >
        {images?.map((image, idx) => (
          <ThumbsSlide key={idx}>
            <MyImage
              src={image}
              alt={`vehicle-thumbnail-${idx}`}
              loaderSize={10}
            />
          </ThumbsSlide>
        ))}
      </ThumbsSwiper>
    </CarouselContainer>
  );
};

export default VehicleImagesCarousel;

VehicleImagesCarousel.propTypes = {
  images: PropTypes.array,
};
