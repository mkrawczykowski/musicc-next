import React from 'react';
import styles from './MegaMenuTypeOne.module.scss';

const MegaMenuTypeOne = () => {
  return (
    <div className={styles.MegaMenuTypeOne__columns}>
      <div className={styles.MegaMenuTypeOne__columnNarrow}>column narrow</div>
      <div className={styles.MegaMenuTypeOne__columnNarrow}>column narrow</div>
      <div className={styles.MegaMenuTypeOne__columnWide}>column wide</div>
    </div>
  )
}

export default MegaMenuTypeOne;