import { StyledLink, StyledSpan, SecondaryText } from './HeaderLogo.styled';

const HeaderLogo = () => {
  return (
    <StyledLink to="/">
      <span>
        Drive<StyledSpan>Lux</StyledSpan>
      </span>
      <SecondaryText>dreams come true</SecondaryText>
    </StyledLink>
  );
};

export default HeaderLogo;
