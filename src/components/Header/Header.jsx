import React from 'react';
import styles from '../../assets/styles/Header.module.css';
import ksrtcImage from '../../assets/images/ksrtc.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img
              src={ksrtcImage}  
              alt="Logo"
              className={styles.logoImage}
            />
            <h1 className={styles.logoText}>KSRTC</h1>
          </div>
          <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
              <li><a href="#Login" className={styles.navLink}>SIGN IN</a></li>
              <li><Link to="/signup" className={styles.navLink}>CREATE ACCOUNT</Link></li>
              <li><a href="#lists" className={styles.navLink}>CHECK BUSES</a></li>
            </ul>
          </nav>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" className={styles.searchInput} />
            <button type="submit" className={styles.searchButton}>&#x1F50D;</button> {/* Unicode for a search icon */}
          </div>
      </header>
    </div>
  )
}

export default Header;
