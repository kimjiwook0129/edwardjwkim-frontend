import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import { useLanguage } from '../LanguageContext';
// import { useTheme } from '../ThemeContext';

const Nav: React.FC<{}> = () => {
  const { language, toggleLanguage } = useLanguage();
  // const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
  <div className={styles['toggle-switch']} onClick={toggleLanguage}>
    <div className={`${styles['toggle-knob']} ${language === 'ko' ? styles['toggle-knob-right'] : ''}`}>
      {language === 'en' ? 'EN' : '한글'}
    </div>
  </div>
</nav>
  );
};

export default Nav;
