import React from 'react';
import Card from '../Card';
import styles from './Benefits.module.scss';
import { data } from '../../data';

const Benefits = () => {
  return (
    <div className={styles.monthlyYearlyContainer}>
      <div className={styles.monthlyYearlyBlock}>
        <p>Benefit both ways - monthly or yearly</p>
      </div>
      <div className={styles.cardsBlock}>
        {data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
