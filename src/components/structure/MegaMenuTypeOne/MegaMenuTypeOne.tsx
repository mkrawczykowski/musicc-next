import React from 'react';
import styles from './MegaMenuTypeOne.module.scss';
import MenuWidgetList from '../MenuWidgetList/MenuWidgetList';

const MegaMenuTypeOne = ({ subMenuData }) => {
  return (
    <div className={styles.MegaMenuTypeOne__background}>
      <div className={styles.MegaMenuTypeOne__columns}>
        <div className={styles.MegaMenuTypeOne__columnNarrow}>
          <MenuWidgetList data={subMenuData[0]} />
        </div>
        <div className={styles.MegaMenuTypeOne__columnNarrow}>
          <h3>by instrument</h3>
          <ul className={styles.MegaMenuTypeOne__heading}>
            <li className={styles.MegaMenuTypeOne__item}>
              <a className={styles.MegaMenuTypeOne__itemLink} href="">
                synth
              </a>
            </li>
            <li className={styles.MegaMenuTypeOne__item}>
              <a className={styles.MegaMenuTypeOne__itemLink} href="">
                piano
              </a>
            </li>
            <li className={styles.MegaMenuTypeOne__item}>
              <a className={styles.MegaMenuTypeOne__itemLink} href="">
                drums
              </a>
            </li>
            <li className={styles.MegaMenuTypeOne__item}>
              <a className={styles.MegaMenuTypeOne__itemLink} href="">
                bass
              </a>
            </li>
            <li className={styles.MegaMenuTypeOne__item}>
              <a className={styles.MegaMenuTypeOne__itemLink} href="">
                double  bass
              </a>
            </li>
          </ul>
          <a href="" className={styles.MegaMenuTypeOne__linkAll}>see all instruments</a>
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