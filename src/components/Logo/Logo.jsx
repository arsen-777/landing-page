import React from 'react';
import styles from './Logo.module.scss';
import { ReactComponent as Logos } from '../../assets/images/companies.svg';
const Logo = () => {
  return (
    <div className={styles.logo}>
      <Logos />
    </div>
  );
};

export default Logo;
