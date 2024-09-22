import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 8px 8px 16px;
  background-color: ${({ theme }) => theme.colors.dark};

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 40px;
  }
`;

export const StyledFormInfoWrapper = styled.div`
  ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    align-items: center;
    gap: 80px;
  }
`;

export const StyledFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 8px;
`;

export const StyledFormLabel = styled.label``;

export const StyledFormInput = styled.input`
  width: 100%;
  padding: 8px 16px;

  border: 2px solid ${({ theme }) => theme.colors.dark_deep};
  background-color: ${({ theme }) => theme.colors.ligth};
  outline: none;

  font-size: ${({ theme }) => theme.fontSize.small.m};

  transition: border 400ms ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledFormTextarea = styled(StyledFormInput)`
  font-family: inherit;
  resize: none;
`;

export const StyledFormSubmitButton = styled.button`
  margin: 10px auto 0;

  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-top: 30px;

  color: ${({ theme }) => theme.colors.orange};
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  background-color: transparent;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.72);

  transition: background-color 300ms ease-in-out, border 300ms ease-in-out,
    color 300ms ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.brown};
  }

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
  }
`;
