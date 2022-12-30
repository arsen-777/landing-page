import React from 'react';
import styles from './CheckItem.module.scss';
import { ReactComponent as Check } from '../../assets/images/approve.svg';
const CheckItem = ({ title }) => {
  return (
    <div className={styles.item}>
      <Check />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default CheckItem;
