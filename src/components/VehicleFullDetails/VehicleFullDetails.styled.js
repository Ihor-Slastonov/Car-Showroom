import styled from 'styled-components';

export const VehicleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    gap: 80px;
  }
`;

export const VehicleId = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  font-size: ${({ theme }) => theme.fontSize.small.xs};

  ${({ theme }) => theme.breakpoints.tablet} {
    justify-content: flex-start;
    gap: 20px;

    font-size: ${({ theme }) => theme.fontSize.small.s};
  }
`;

export const VehicleTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const VehicleTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.m};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1.5;

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.small.l};
  }

  & > span {
    font-weight: 400;
  }
`;

export const VehicleDescription = styled.p`
  margin-bottom: 20px;
`;

export const VehiclePriceList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'price'
    'discount'
    'stock'
    'availability';

  gap: 10px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.dark};

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'price stock'
      'discount availability';
  }
`;

export const VehiclePriceTitle = styled(VehicleTitle)`
  &:nth-child(1) {
    grid-area: price;
  }
  &:nth-child(2) {
    grid-area: discount;
  }
  &:nth-child(3) {
    grid-area: stock;
  }
  &:nth-child(4) {
    grid-area: availability;
  }

  & > span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const VehicleSpecsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'weight'
    'width'
    'height'
    'depth';

  gap: 10px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.dark};

  ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'weight width'
      'depth height';
  }
`;

export const VehicleSpecsTitle = styled(VehiclePriceTitle)`
  &:nth-child(1) {
    grid-area: weight;
  }
  &:nth-child(2) {
    grid-area: width;
  }
  &:nth-child(3) {
    grid-area: height;
  }
  &:nth-child(4) {
    grid-area: depth;
  }
`;

export const VehicleShippingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    gap: 46px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    gap: 112px;
  }
`;

export const VehicleShippingTitle = styled(VehicleSpecsTitle)`
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const VehicleQrWrapper = styled.div`
  width: 100px;
  height: 100px;

  & > img {
    object-fit: contain;
  }
`;
