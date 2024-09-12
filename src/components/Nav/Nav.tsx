import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';

const Nav: React.FC<{}> = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles['toggle-switch']} onClick={toggleLanguage}>
        <div className={`${styles['toggle-knob']} ${language === 'ko' ? styles['toggle-knob-right'] : ''}`}>
          {language === 'en' ? 'EN' : '한글'}
        </div>
      </div>
      <div className={styles['toggle-switch']} onClick={toggleTheme}>
        <div className={`${styles['toggle-knob']} ${theme === 'dark' ? styles['toggle-knob-right'] : ''}`}>
          <img 
            src={theme === 'light' ? '/sun.png' : '/moon.png'} 
            alt={theme === 'light' ? 'Sun' : 'Moon'} 
            className={styles['toggle-image']}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
