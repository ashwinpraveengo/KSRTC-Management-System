import React, { useState } from 'react';
import styles from '../../assets/styles/Signup.module.css';
import image2 from '../../assets/images/cross.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage('Signup successful!');
        setFormData({ email: '', username: '', password: '' }); // Reset form
      } else {
        setMessage(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.window}>
      <div className={styles.contentContainer}>
        <div className={styles.contentHolder}>
          <Link to="/" className={styles.navElement}>
            <img src={image2} alt="Cross Icon" width={35} height={35} />
          </Link>
          <h1 className={styles.contentText}>SignUp to KSRTC</h1>
          <div className={styles.formContainer}>
            <form className={styles.formHolder} onSubmit={handleSubmit}>
              <div>
                <label className={styles.inputHolder} htmlFor="email">
                  Email Address <br />
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.inputBox}
                />
              </div>

              <div>
                <label className={styles.inputHolder} htmlFor="username">
                  Username <br />
                </label>
                <input
                  required
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={styles.inputBox}
                />
              </div>

              <div>
                <label className={styles.inputHolder} htmlFor="password">
                  Password <br />
                </label>
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.inputBox}
                />
              </div>

              <div style={{ marginTop: '10px', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" required id="checkbox1" name="Terms" style={{ marginRight: '10px' }} />
                <label htmlFor="checkbox1" style={{ fontSize: '14px', color: 'white' }}>
                  I'm at least 16 years old and accept the Terms of Use.
                </label>
              </div>

              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" required id="checkbox2" name="Privacy Policy" style={{ marginRight: '10px' }} />
                <label htmlFor="checkbox2" style={{ fontSize: '14px', color: 'white' }}>
                  I accept the Privacy Policy.
                </label>
              </div>

              <div>
                <button type="submit" className={styles.submitBtn}>
                  SIGN UP
                </button>
              </div>
            </form>
            {message && <p className={styles.message}>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
