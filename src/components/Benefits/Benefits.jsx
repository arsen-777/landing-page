import React from 'react';
import Card from '../Card';
import styles from './Benefits.module.scss';
import { data } from '../../data';
import 'aos/dist/aos.css';

const Benefits = () => {
  return (
    <div className={styles.monthlyYearlyContainer}>
      <div className={styles.monthlyYearlyBlock} data-aos="fade-up">
        <p>Benefit both ways - monthly or yearly</p>
      </div>
      <div className={styles.cardsBlock} data-aos="fade-up">
        {data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
