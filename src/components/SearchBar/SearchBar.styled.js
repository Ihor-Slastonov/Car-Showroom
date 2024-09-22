import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  width: 272px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.light};

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 368px;
    margin-left: auto;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 410px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;

  color: ${({ theme }) => theme.colors.brown};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 300ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 48px;

  border: transparent;
  outline: transparent;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.s};
  line-height: 1;

  &::placeholder {
    color: gray;
  }
`;

export const SearchClearButton = styled(SearchButton)`
  left: calc(100% - 36px);
  opacity: ${({ 'data-words': word }) => (!word ? 0 : 1)};
  transition: opacity 400ms ease-in-out;
  pointer-events: ${({ 'data-words': word }) => (!word ? 'none' : 'all')};
`;
