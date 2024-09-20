import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 272px;
  height: 480px;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  background-color: ${({ theme }) => theme.colors.dark};

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 332px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 302px;
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};

  & > img {
    object-fit: cover;
  }
`;

export const CardDiscount = styled.span`
  position: absolute;
  top: 20px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.orange};

  font-weight: 600;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.small.xxs};
  }
`;

export const CardRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.dark_deep_tr};
`;

export const CardInfoWrapper = styled.div`
  flex-grow: 1;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.dark_deep};
`;

export const CardTitle = styled.h3`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.m};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.5;
`;

export const CardTitleSecondary = styled.h4`
  margin-bottom: 16px;

  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.m};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.5;
`;

export const CardText = styled.p`
  margin-bottom: 14px;

  font-size: ${({ theme }) => theme.fontSize.small.s};
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPriceOld = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 4px;
  color: grey;

  &::before {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: wheat;
    transform: rotate(-8deg); /* Угол поворота для наклонной линии */
    transform-origin: left top; /* Задаём точку вращения */
  }
`;

export const CardFinalPrice = styled.p`
  display: inline-block;
  margin-top: 10px;
  padding: 4px;
  background-color: #c7253e;

  font-size: ${({ theme }) => theme.fontSize.small.xl};
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  margin: 10px auto 0;

  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.brown};
  background-color: transparent;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);

  transition: background-color 300ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.brown};
  }

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 30px;
  }
`;
