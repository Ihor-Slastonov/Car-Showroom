import styled from 'styled-components';

export const StarRatingContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

export const StarOutline = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;

  &:first-child {
    margin-left: 0;
  }

  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const StarColoredContainer = styled.div`
  display: inline-flex;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
`;

export const StarColored = styled(StarOutline)`
  svg {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
