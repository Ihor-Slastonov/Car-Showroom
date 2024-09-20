import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
  /* background-color: #343131; */

  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 26px 0;
  }

  /* desktop */
  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 22px 0;
  }
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    gap: 40px;
  }
`;
