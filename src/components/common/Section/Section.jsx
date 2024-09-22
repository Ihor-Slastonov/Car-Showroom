import PropTypes from 'prop-types';

import { StyledSection } from './Section.styled';

const Section = ({ children, noTopPadding = false }) => {
  return <StyledSection noTopPadding={noTopPadding}>{children}</StyledSection>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.node,
};
