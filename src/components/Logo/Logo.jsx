import React from 'react';
import styles from './Logo.module.scss';
import { ReactComponent as Logos } from '../../assets/images/companies.svg';
import 'aos/dist/aos.css';
const Logo = () => {
  return (
    <div className={styles.logo} data-aos="fade-up">
      <Logos />
    </div>
  );
};

export default Logo;
