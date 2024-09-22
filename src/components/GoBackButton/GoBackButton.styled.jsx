import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyldeButton = styled(Link)`
  margin-bottom: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.fontSize.small.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1;
  color: ${({ theme }) => theme.colors.light};

  transition: color 400ms ease-in-out;
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
