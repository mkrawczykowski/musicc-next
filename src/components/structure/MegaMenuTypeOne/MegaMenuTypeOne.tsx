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
          <MenuWidgetList data={subMenuData.mostPopular} />
          <MenuWidgetList data={subMenuData.featured} />
        </div>
      </div>
    </div>
  )
}

export default MegaMenuTypeOne;