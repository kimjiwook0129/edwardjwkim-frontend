import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="bottom-element">
      <p>&copy; 2024 Edward Kim. All rights reserved.</p>
    </footer>
  );
};

export default Footer;