import React from 'react';
import styles from './MegaMenuTypeOne.module.scss';
import MenuWidgetList from '../MenuWidgetList/MenuWidgetList';

const MegaMenuTypeOne = ({ subMenuData }) => {
  return (
    <div className={styles.MegaMenuTypeOne__background}>
      <div className={styles.MegaMenuTypeOne__columns}>
        <div className={styles.MegaMenuTypeOne__columnNarrow}>
          <MenuWidgetList data={subMenuData.moods} />
        </div>
        <div className={styles.MegaMenuTypeOne__columnNarrow}>
          <MenuWidgetList data={subMenuData.instruments} />
        </div>
        <div className={styles.MegaMenuTypeOne__columnWide}>
          <h3 className={styles.MegaMenuTypeOne__heading}>most popular tracks</h3>
          <p className={styles.MegaMenuTypeOne__paragraph}>tracks with the highest number of downloads</p>
          <h3 className={styles.MegaMenuTypeOne__heading}>featured tracks</h3>
          <p className={styles.MegaMenuTypeOne__paragraph}>tracks I like the most</p>
        </div>
      </div>
    </div>
  )
}

export default MegaMenuTypeOne;