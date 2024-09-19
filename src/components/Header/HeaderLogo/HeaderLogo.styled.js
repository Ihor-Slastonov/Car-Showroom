import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const StyledLink = styled(Link)`
  position: relative;

  font-family: ${({ theme }) => theme.fonts.Kanit};
  font-size: ${({ theme }) => theme.fontSize.small.l};
  font-style: italic;
  line-height: 1;

  filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.72));
  -webkit-filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.72));
  -moz-filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.72));

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      #fff,
      ${({ theme }) => theme.colors.orange}
    );
  }

  &::after {
    content: 'dreams come true';
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);

    width: 100%;

    font-size: 8px;
    font-weight: 200;
    font-style: normal;
    text-align: center;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;
