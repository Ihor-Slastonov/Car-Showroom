import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const StyledLink = styled(Link)`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;

  font-family: ${({ theme }) => theme.fonts.Kanit};
  font-size: ${({ theme }) => theme.fontSize.small.xl};
  font-style: italic;
  line-height: 1;

  filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.72));
  -webkit-filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.72));
  -moz-filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.72));

  &::before {
    content: '';
    position: absolute;
    top: 65%;

    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      #fff,
      ${({ theme }) => theme.colors.orange}
    );
  }

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.medium.s};
    gap: 4px;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

export const SecondaryText = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.small.xxs};
  font-weight: 200;
  font-style: normal;
  text-align: center;

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.small.xs};
  }
`;
