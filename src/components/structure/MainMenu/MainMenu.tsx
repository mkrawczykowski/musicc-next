import React from "react";
import styles from './MainMenu.module.scss';
import MainMenuItem from '../MainMenuItem/MainMenuItem';

const MainMenu = ({ }) => {

  return (
    <ul className={styles.MainMenu}>
      <MainMenuItem label="free music" url="/" />
      <MainMenuItem label="Creative Commons 4.0 license" url="/" />
      <MainMenuItem label="About the author" url="/" />
      <MainMenuItem label="Contact the author" url="/" />
    </ul>
  )
}

export default MainMenu;