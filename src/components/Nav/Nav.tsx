import React, { useState } from 'react';
import styles from './Nav.module.css';
import * as data from './links.json';
import { useLanguage } from '../LanguageContext';

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const Links: React.FC<{ links: Link[], className: string }> = ({ links, className }) => {
  return (
    <div className={className}>
      {links.map((link: Link) => (
        <div key={link.href} className={styles['link']}>
          <a href={link.href}>{link.label}</a>
        </div>
      ))}
    </div>
  );
};

const Nav: React.FC<{}> = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <span>Edward.J.Kim</span>
      </div>
      <div className={styles['menu-toggle']} onClick={toggleMenu}>
        &#9776;
      </div>
      <Links links={links[language]} className={`${styles['links-container']} ${isMenuOpen ? styles['open'] : ''}`} />
      <div className={styles['toggle-switch']} onClick={toggleLanguage}>
        <div className={`${styles['toggle-knob']} ${language === 'ko' ? styles['toggle-knob-right'] : ''}`}></div>
        <span className={styles['toggle-text']}>{language === 'en' ? 'EN' : 'KR'}</span>
      </div>
    </nav>
  );
};

export default Nav;