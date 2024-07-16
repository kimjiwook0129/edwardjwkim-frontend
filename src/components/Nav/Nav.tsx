// import React, { useState } from 'react';
// import styles from './Nav.module.css';
// import * as data from './links.json';

// const linksString = JSON.stringify(data);
// const links = JSON.parse(linksString).links;

// type Link = {
//   label: string;
//   href: string;
// };

// const Links: React.FC<{ links: Link[] }> = ({ links }) => {
//   return (
//     <div className={styles['links-container']}>
//       {links.map((link: Link) => (
//         <div key={link.href} className={styles['link']}>
//           <a href={link.href}>{link.label}</a>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Nav: React.FC<{}> = () => {
//   const [language, setLanguage] = useState('en');

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ko' : 'en'));
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles['logo-container']}>
//         <span>Edward.J.Kim</span>
//       </div>
//       <Links links={links[language]} />
//       <div className={styles['toggle-switch']} onClick={toggleLanguage}>
//         <div className={`${styles['toggle-knob']} ${language === 'ko' ? styles['toggle-knob-right'] : ''}`}></div>
//         <span className={styles['toggle-text']}>{language === 'en' ? 'EN' : 'KR'}</span>
//       </div>
//     </nav>
//   );
// };

// export default Nav;



import React, { useState } from 'react';
import styles from './Nav.module.css';
import * as data from './links.json';

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
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ko' : 'en'));
  };

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