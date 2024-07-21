import React, { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import * as data from './links.json';
import { useLanguage } from '../LanguageContext';

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
  download: boolean;
};

const Links: React.FC<{ links: Link[], className: string, onLinkClick: (link: Link) => void }> = ({ links, className, onLinkClick }) => {
  return (
    <div className={className}>
      {links.map((link: Link) => (
        <div key={link.href} className={styles['link']}>
          <a href={link.href} download={link.download} onClick={(e) => {
            e.preventDefault();
            onLinkClick(link);
          }}>
            {link.label}
          </a>
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

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  const handleLinkClick = (link: Link) => {
    if (link.href === '/') {
      const bottomElement = document.getElementById('bottom-element');
      if (bottomElement) {
        bottomElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(link.href, '_blank');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <span>Edward Kim</span>
      </div>
      <div className={styles['menu-toggle']} onClick={toggleMenu}>
        &#9776;
      </div>
      <Links 
        links={links[language]} 
        className={`${styles['links-container']} ${isMenuOpen ? styles['open'] : ''}`}
        onLinkClick={handleLinkClick}
      />
      <div className={styles['toggle-switch']} onClick={toggleLanguage}>
        <div className={`${styles['toggle-knob']} ${language === 'ko' ? styles['toggle-knob-right'] : ''}`}></div>
        <span className={styles['toggle-text']}>{language === 'en' ? 'EN' : 'KR'}</span>
      </div>
    </nav>
  );
};

export default Nav;
