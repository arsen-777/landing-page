import React from 'react';
import styles from './Feature.module.scss';

const Feature = ({ title, Icon }) => {
  return (
    <div className={styles.iconContainer}>
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default Feature;
