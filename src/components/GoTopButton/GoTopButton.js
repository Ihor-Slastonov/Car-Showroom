import { useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

import { ScrollWrapper, ScrollBg } from './GoTopButton.styled';

function GoTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <ScrollWrapper onClick={scrollToTop}>
          <ScrollBg>
                      <BsArrowUpShort size={40} />
          </ScrollBg>
        </ScrollWrapper>
      )}
    </>
  );
}

export default GoTopButton;
