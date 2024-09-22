import styled from 'styled-components';

export const StyledTitle = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.orange};
`;

export const VehicleCommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  height: 400px;
  overflow: auto;

  & > li {
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.dark};
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.brown};
    }
  }
`;
export const CommentsDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small.s};
`;

export const CommentsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  margin-bottom: 12px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
    align-items: start;
    gap: 4px;
    margin-bottom: 12px;
  }
`;

export const CommentsInfoName = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small.l};
  text-transform: capitalize;
`;
