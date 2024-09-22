import { useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { StyldeButton } from './GoBackButton.styled';

const GoBackButton = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <StyldeButton to={backLinkHref}>
      <BiArrowBack size={24} />
      Back
    </StyldeButton>
  );
};

export default GoBackButton;
