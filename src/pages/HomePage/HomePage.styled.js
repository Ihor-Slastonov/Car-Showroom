import styled from 'styled-components';

export const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small.xl};
  font-weight: 600;
  text-align: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.medium.m};
  }
`;
