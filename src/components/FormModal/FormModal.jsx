import React from 'react';
import styles from './FormModal.module.scss';
import girl from '../../assets/images/girl.png';
const FormModal = () => {
  return (
    <div className={styles.formModal}>
      <div>
        <img src={girl} alt="" />
      </div>
      <div className={styles.btnDlt}>
        <button>Save</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default FormModal;
