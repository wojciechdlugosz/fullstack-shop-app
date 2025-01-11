import { useState, useEffect } from 'react';
import Button from '../../common/Button/Button';
import { FaArrowUpLong } from 'react-icons/fa6';
import styles from './ScrollTopButton.module.scss';

const ScrollTopButton = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scroll}>
      {showScrollTopButton && (
        <Button type="button" content={<FaArrowUpLong />} onClick={scrollTop} />
      )}
    </div>
  );
};

export default ScrollTopButton;