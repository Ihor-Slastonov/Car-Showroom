import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.gold};
  background-color: ${({ theme }) => theme.colors.dark};

  ${({ theme }) => theme.breakpoints.desktop} {
    width: 600px;
  }
`;

export const StyledSwipper = styled(Swiper)`
  width: 100%;
  height: 250px;

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.gold}; /* Цвет навигационных стрелок */
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.gold};
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 274px;
  }
  .swiper-slide-thumb-active {
    border: 2px solid ${({ theme }) => theme.colors.gold};
  }

  .swiper-container {
    width: 100%;
    height: auto;
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  & > img {
    object-fit: contain;
  }
`;

export const ThumbsSwiper = styled(Swiper)`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  padding: 4px 0;

  border-top: 1px solid ${({ theme }) => theme.colors.gold};

  ${({ theme }) => theme.breakpoints.tablet} {
    height: 80px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    height: 120px;
  }

  .swiper-slide-thumb-active {
    border: 2px solid ${({ theme }) => theme.colors.gold};
  }

  .swiper-container {
    width: 100%;
    height: auto;
  }
`;

export const ThumbsSlide = styled(SwiperSlide)`
  cursor: pointer;

  & > img {
    object-fit: cover;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gold};
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  z-index: 1001;
`;
