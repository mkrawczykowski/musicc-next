import React from "react";
import styles from './MainMenu.module.scss';
import MainMenuItem from '../MainMenuItem/MainMenuItem';

const MainMenu = ({ }) => {

  const subMenuData =
  {
    megaMenuType: 'mega_menu_1',
    widgetsData: [
      {
        widgetType: 'list',
        widgetData: ['warm', 'cold', 'mysterious', 'emotional', 'happy'],
        widgetHeading: 'by mood',
        widgetLinkLabel: 'see all moods',
        widgetLinkUrl: '#'
      },
      {
        widgetType: 'list',
        widgetData: ['synth', 'piano', 'drums', 'bass', 'double bass'],
        widgetHeading: 'by mood',
        widgetLinkLabel: 'see all moods',
        widgetLinkUrl: '#'
      },
      {
        widgetType: 'simple',
        widgetData: ['tracks with the biggest number of downloads'],
        widgetHeading: 'Most popular tracks',
        widgetLinkLabel: 'see all tracks',
        widgetLinkUrl: '#'
      },
      {
        widgetType: 'simple',
        widgetData: ['tracks I like the most'],
        widgetHeading: 'FEATURED TRACKS - TRACKS I LIKE THE MOST',
        widgetLinkLabel: 'see all tracks',
        widgetLinkUrl: '#'
      },
    ]
  }

  return (
    <ul className={styles.MainMenu}>
      <MainMenuItem label="free music" url="/" subMenuData={subMenuData} />
      <MainMenuItem label="Creative Commons 4.0 license" url="/" />
      <MainMenuItem label="About the author" url="/" />
      <MainMenuItem label="Contact the author" url="/" />
    </ul>
  )
}

export default MainMenu;