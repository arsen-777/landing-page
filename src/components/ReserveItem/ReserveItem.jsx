import React from 'react';
import styles from './ReserveItem.module.scss';
const ReserveItem = ({ title, Icon }) => {
  return (
    <div className={styles.item}>
      <Icon />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default ReserveItem;
