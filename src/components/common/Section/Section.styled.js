import styled from 'styled-components';

export const StyledSection = styled(({ noTopPadding, ...props }) => (
  <section {...props} />
))`
  padding: ${({ noTopPadding }) => (!noTopPadding ? '40px 0' : '0 0 40px')};

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: ${({ noTopPadding }) => (!noTopPadding ? '60px 0' : '0 0 60px')};
  }
`;
