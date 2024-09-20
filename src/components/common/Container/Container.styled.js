import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  /* mobile */
  ${({ theme }) => theme.breakpoints.mobile} {
    width: 320px;
  }

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 768px;
    padding: 0 40px;
  }

  /* desktop */
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 1440px;
  }
`;
