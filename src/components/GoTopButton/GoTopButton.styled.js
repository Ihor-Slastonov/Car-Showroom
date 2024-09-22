import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ScrollWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  right: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.gold};
  z-index: 999;
  animation: ${fadeIn} 0.5s linear;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.tablet} {
    right: 10%;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    right: 15%;
  }
`;

export const ScrollBg = styled.span`
  width: 40px;
  height: 40px;

  background-color: #373737;

  & > svg {
    fill: ${({ theme }) => theme.colors.orange};
  }
`;
