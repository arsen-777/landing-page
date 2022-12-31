import React from 'react';
import styles from './AllFeatures.module.scss';
import { list } from '../../data';
import Feature from '../Feature';
import { formList } from '../../data';
import ReserveItem from '../ReserveItem';
import { ReactComponent as Clock } from '../../assets/images/clock.svg';
import { ReactComponent as Upload } from '../../assets/images/upload.svg';
import { ReactComponent as Download } from '../../assets/images/sel1.svg';
import { ReactComponent as Download2 } from '../../assets/images/sel2.svg';
import launch from '../../assets/images/launch3.png';
import facebook from '../../assets/images/facebook.png';
import FormModal from '../FormModal';
import 'aos/dist/aos.css';

const AllFeatures = () => {
  return (
    <main className={styles.main}>
      <div className={styles.featuresTitle} data-aos="fade-up">
        <p>
          Save Big on All Features <span>no exceptions</span>
        </p>
      </div>
      <div className={styles.allFeaturesContainer} data-aos="fade-up">
        <div className={styles.features}>
          {list.map((item) => (
            <Feature {...item} Icon={item.icon} />
          ))}
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoBlock} data-aos="fade-right">
            <p>
              Track the time your employees spend on work and get detailed
              information
            </p>
            <div className={styles.listChecked}>
              {formList.map((item) => (
                <ReserveItem {...item} Icon={item.icon} />
              ))}
            </div>
            <button>RESERVE YOUR SEAT</button>
          </div>
          <div className={styles.formContainer} data-aos="fade-up">
            <div className={styles.selectedContainer}>
              <div className={styles.total}>
                <div className={styles.time}>
                  <Clock />
                </div>
                <div className={styles.info}>
                  <p>Total</p>
                  <p>04:20</p>
                </div>
                <div className={styles.info}>
                  <p>Tracked</p>
                  <p>04:20</p>
                </div>
                <div className={styles.info}>
                  <p>Manual</p>
                  <p>00:00</p>
                </div>
              </div>
              <div className={styles.selectAll}>
                <button>Select All</button>
                <div className={styles.download}>
                  <Download />
                  <Download2 />
                </div>
              </div>
            </div>
            <div className={styles.dateBlock}>
              <input type="date" />
            </div>
            <div className={styles.launchContainer}>
              <div className={styles.launchBlock}>
                <div className={styles.launch}>
                  <div className={styles.info}>
                    <p>MVP Launch</p>
                    <p>10:20</p>
                  </div>
                  <div className={styles.img}>
                    <img src={launch} alt="" />
                  </div>
                  <div className={styles.color}></div>
                </div>
                <div></div>
              </div>
              <div className={styles.launchBlock}>
                <div className={styles.launch}>
                  <div className={styles.info}>
                    <p>MVP Launch</p>
                    <p>10:20</p>
                  </div>
                  <div className={styles.svg}>
                    <input type="file" />
                    <div>
                      <Upload />
                    </div>
                  </div>
                  <div className={styles.color2}></div>
                </div>
                <div></div>
              </div>
            </div>
            <div className={styles.endBlock}>
              <div className={styles.launchBlock}>
                <div className={styles.launch}>
                  <div className={styles.info}>
                    <p>MVP Launch</p>
                    <p>10:20</p>
                  </div>
                  <div className={styles.svg}>
                    <input type="file" />
                    <div>
                      <Upload />
                    </div>
                  </div>
                  <div className={styles.color3}></div>
                </div>
                <div></div>
              </div>
              <div className={styles.launchBlock}>
                <div className={styles.launch}>
                  <div className={styles.info}>
                    <p>MVP Launch</p>
                    <p>10:20</p>
                  </div>
                  <div className={styles.facebook}>
                    <div>
                      <img src={facebook} alt="" />
                    </div>
                  </div>
                  <div className={styles.color4}></div>
                </div>
                <div></div>
              </div>
              <div className={styles.launchBlock}>
                <div className={styles.launch}>
                  <div className={styles.info}>
                    <p>MVP Launch</p>
                    <p>10:20</p>
                  </div>
                  <div className={styles.facebook}>
                    <div>
                      <img src={facebook} alt="" />
                    </div>
                  </div>
                  <div className={styles.color4}></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <FormModal />
        </div>
      </div>
    </main>
  );
};

export default AllFeatures;
