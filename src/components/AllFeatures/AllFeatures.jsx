import React from 'react';
import styles from './AllFeatures.module.scss';
import { list } from '../../data';
import Feature from '../Feature';
import { formList } from '../../data';
import ReserveItem from '../ReserveItem';
const AllFeatures = () => {
  return (
    <>
      <div className={styles.featuresTitle}>
        <p>
          Save Big on All Features <span>no exceptions</span>
        </p>
      </div>
      <div className={styles.allFeaturesContainer}>
        <div className={styles.features}>
          {list.map((item) => (
            <Feature {...item} Icon={item.icon} />
          ))}
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoBlock}>
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
          <div className={styles.formContainer}></div>
        </div>
      </div>
    </>
  );
};

export default AllFeatures;
