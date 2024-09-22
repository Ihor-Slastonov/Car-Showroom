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
