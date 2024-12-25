import React from 'react';
import styles from '../../assets/styles/Signup.module.css';
import image2 from '../../assets/images/cross.png';
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Header/>
        <div className={styles.window}>
        <div className={styles.contentContainer}>
          <div className={styles.contentHolder}>
            <Link to="/" className={styles.navElement}>
              <img src={image2} alt="Cross Icon" width={35} height={35} />
            </Link>
            <h1 className={styles.contentText}>LOGIN to KSRTC</h1>
            <div className={styles.formContainer}>
              <form className={styles.formHolder}>
              <div>
                <label htmlFor="Email">Email Address <br /></label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className={styles.inputBox}
                />
              </div>

            <div>
              <label htmlFor="username"> Username <br /> </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                className={styles.inputBox}
              />
            </div>

            <div>
              <label htmlFor="password">Password <br /> </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                className={styles.inputBox}
              />
            </div>

            <div>
              <button type="submit" className={styles.submitBtn}>
                LOGIN
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login
