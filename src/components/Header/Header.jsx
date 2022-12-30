import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as WebWork } from '../../assets/images/x.svg';

const Header = () => {
  return (
    <header className={styles.headerBlock}>
      <div className={styles.webWork}>
        <WebWork />
        <h1>WebWork</h1>
      </div>
      <button className={styles.btn}>get now</button>
    </header>
  );
};

export default Header;
