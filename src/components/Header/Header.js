import Container from '../Container/Container';
import { StyledHeader } from './Header.styled';
import HeaderLogo from './HeaderLogo/HeaderLogo';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderLogo />
      </Container>
    </StyledHeader>
  );
};

export default Header;
