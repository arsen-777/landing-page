import React from 'react';
import styles from './Footer.module.scss';
import rec1 from '../../assets/images/rec1.png';
import rec2 from '../../assets/images/rec2.png';
import rec3 from '../../assets/images/rec3.png';
import rec4 from '../../assets/images/Selfie.png';
import ellipse1 from '../../assets/images/ellipse1.png';
import ellipse2 from '../../assets/images/ellipse2.png';
import ellipse3 from '../../assets/images/ellipse3.png';
import { ReactComponent as Line } from '../../assets/images/line.svg';
import tennis from '../../assets/images/tennis2.png';
import 'aos/dist/aos.css';

import women from '../../assets/images/women.png';
import { ReactComponent as Rec } from '../../assets/images/rr.svg';
const Footer = () => {
  return (
    <footer className={styles.footer} data-aos="fade-up">
      <div className={styles.leftSide}>
        <p>Save 50% Now</p>
        <button>GET MY DISCOUNT</button>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.selfieBlock}>
          <div className={styles.container}>
            <div className={styles.activity}>
              <p>Activity</p>
              <div className={styles.info}>
                <p>+45%</p>
                <span>yesterday</span>
                <div>28h 34m</div>
              </div>
              <div className={styles.activeUsers}>
                <p>Active users</p>
                <p>Active Projects</p>
              </div>
              <div className={styles.nums}>
                <p>50</p>
                <p>35</p>
                <Line />
              </div>
            </div>
            <div className={styles.selfie}>
              <img src={rec4} alt="" />
            </div>
          </div>
          <div className={styles.teamBlock}>
            <div className={styles.numbers}>
              <div>
                <p>100</p>
                <p>75</p>
                <p>50</p>
              </div>
              <img src={tennis} alt="" />
            </div>
            <div className={styles.team}>
              <p>Team</p>
              <div>
                <img src={women} alt="" />
                <Rec />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.elipse}>
        <img className={styles.elipse2} src={ellipse2} alt="" />
        <img className={styles.elipse1} src={ellipse1} alt="" />
        <img className={styles.elipse3} src={ellipse3} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
