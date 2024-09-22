import styled from 'styled-components';

export const Star = styled.span`
  cursor: pointer;
  font-size: 2rem;
  color: ${({ $filled, theme }) =>
    $filled === 'true'
      ? theme.colors.orange
      : theme.colors.light}; // Правильно используем тему
  transition: color 200ms;
`;

export const RadioInput = styled.input`
  display: none;
`;
