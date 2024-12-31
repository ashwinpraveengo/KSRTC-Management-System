import React from 'react';
import styles from '../../assets/styles/Header.module.css';
import ksrtcImage from '../../assets/images/ksrtc.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <header className={styles.header}>
          <div className={styles.logo}>
          <Link to="/">
            <img src={ksrtcImage} alt="Logo" className={styles.logoImage} />
          </Link>
            <h1 className={styles.logoText}>KSRTC</h1>
          </div>
          <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
              <li><Link to="/" className={styles.navElement}>HOME</Link></li>
              <li><Link to="/login" className={styles.navElement}>SIGN IN</Link></li>
              <li><Link to="/signup" className={styles.navElement}>CREATE ACCOUNT</Link></li>
              <li><Link to="/admin" className={styles.navElement}>ADMIN</Link></li>
            </ul>
          </nav>
      </header>
    </div>
  )
}

export default Header;
