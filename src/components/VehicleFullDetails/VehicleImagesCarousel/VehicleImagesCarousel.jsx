import { useRef, useState } from 'react';
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

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import Modal from '../../common/Modal/Modal';

const VehicleImagesCarousel = ({ images }) => {
  const thumbsSwiperRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = image => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <CarouselContainer>
      <StyledSwipper
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        observer={true}
        observeParents={true}
      >
        {images?.map((image, idx) => (
          <StyledSlide key={idx} onClick={() => openModal(image)}>
            <MyImage src={image} alt={`vehicle-image-${idx}`} />
          </StyledSlide>
        ))}
      </StyledSwipper>

      <ThumbsSwiper
        modules={[Thumbs]}
        onSwiper={swiper => {
          thumbsSwiperRef.current = swiper;
          swiper.update();
        }}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        slidesPerView={3}
      >
        {images?.map((image, idx) => (
          <ThumbsSlide
            key={idx}
            onClick={() => thumbsSwiperRef.current.slideTo(idx)}
          >
            <MyImage
              src={image}
              alt={`vehicle-thumbnail-${idx}`}
              loaderSize={10}
            />
          </ThumbsSlide>
        ))}
      </ThumbsSwiper>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {currentImage && (
            <MyImage
              src={currentImage}
              alt="Full vehicle image"
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          )}
        </Modal>
      )}
    </CarouselContainer>
  );
};
export default VehicleImagesCarousel;

VehicleImagesCarousel.propTypes = {
  images: PropTypes.array,
};
