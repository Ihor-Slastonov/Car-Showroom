import Container from '../common/Container/Container';
import SearchBar from '../SearchBar/SearchBar';
import HeaderLogo from './HeaderLogo/HeaderLogo';

import { StyledHeader, HeaderContentWrapper } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderContentWrapper>
          <HeaderLogo />
          <SearchBar />
        </HeaderContentWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
