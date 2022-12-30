import React from 'react';
import styles from './Card.module.scss';
import CheckItem from '../CheckItem';
import { ReactComponent as Neon } from '../../assets/images/neon.svg';

const Card = ({ id, title, percent, amount, number, peruser, monthly }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardItem}>
        <h3>{title}</h3>
        <div className={styles.amount}>
          <span>{amount}</span>
          <p>{number}</p>
          <div className={styles.line}></div>
        </div>
        <p>{peruser}</p>
        <div>
          {monthly.map((item) => (
            <CheckItem {...item} />
          ))}
        </div>
        <button>GET YOUR DEAL</button>
      </div>
      <div className={styles.neonBlock}>
        <Neon />
      </div>
      <div className={styles.percent}>
        {id === 1 ? (
          <p>50%</p>
        ) : (
          <div className={styles.plus}>
            <p>18%+</p>
            <span>50%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
