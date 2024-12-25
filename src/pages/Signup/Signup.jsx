import React from 'react';
import styles from '../../assets/styles/Signup.module.css';
import image2 from '../../assets/images/cross.png';
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <Header/>
    <div className={styles.window}>
        <div className={styles.contentContainer}>
          <div className={styles.contentHolder}>
            <Link to="/" className={styles.navElement}>
              <img src={image2} alt="Cross Icon" width={35} height={35} />
            </Link>
            <h1 className={styles.contentText}>SignUp to KSRTC</h1>
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

            <div style={{ marginTop: "10px", marginBottom: "15px", display: "flex", alignItems: "center" }}>
              <input type="checkbox" required id="checkbox1" name="Terms" style={{ marginRight: "10px" }} />
              <label htmlFor="checkbox1" style={{ fontSize: "14px", color: "white" }}>
                I'm at least 16 years old and accept the Terms of Use.
              </label>
            </div>

            <div style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
              <input type="checkbox" required id="checkbox2" name="Privacy Policy" style={{ marginRight: "10px" }} />
              <label htmlFor="checkbox2" style={{ fontSize: "14px", color: "white" }}>
                I accept the Privacy Policy.
              </label>
            </div>

            <div>
              <button type="submit" className={styles.submitBtn}>
                SIGN UP
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

export default Signup;