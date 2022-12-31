import React from 'react';
import styles from './BiggerSale.module.scss';
import { ReactComponent as Raiting } from '../../assets/images/rating.svg';
import percent from '../../assets/images/fixed.png';
import fiveten from '../../assets/images/xxx.png';

import { ReactComponent as Capterra } from '../../assets/images/capterra.svg';
import { ReactComponent as Crowd } from '../../assets/images/crowd.svg';
import { ReactComponent as GetApp } from '../../assets/images/getapp.svg';
import { ReactComponent as Checked } from '../../assets/images/checked.svg';
import 'aos/dist/aos.css';

const BiggerSale = () => {
  return (
    <div className={styles.salesContainer}>
      <div className={styles.cyberSalesBlock} data-aos="fade-right">
        <div className={styles.biggerSale}>
          <p>
            cyber monday<span>means</span>
          </p>
          <p>
            an even <span>bigger sale</span>
          </p>
        </div>
        <div className={styles.cyber}>
          <p>Cyber Monday saves you money, WebWork saves you time.</p>
        </div>
        <div className={styles.saveBig}>
          <button>save big now</button>
          <div className={styles.checked}>
            <Checked />
            <p>14-day free trial No credit card required</p>
          </div>
        </div>
        <div className={styles.raiting}>
          <Raiting />
          <p>Reviews from 51K+ happy users below and beyond</p>
        </div>
        <div className={styles.brands}>
          <Capterra />
          <Crowd />
          <GetApp />
        </div>
      </div>
      <div className={styles.percent} data-aos="zoom-in">
        <img src={percent} alt="" />
        <img src={fiveten} alt="" className={styles.fiveten} />
      </div>
    </div>
  );
};

export default BiggerSale;
