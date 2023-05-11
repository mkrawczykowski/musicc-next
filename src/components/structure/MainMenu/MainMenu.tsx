import React from "react";
import styles from './MainMenu.module.scss';
import MainMenuItem from '../MainMenuItem/MainMenuItem';

const MainMenu = ({ }) => {

  const megaMenu1 =
    [
      {
        widgetType: 'list',
        widgetData: [
          {
            label: 'warm',
            url: '#',
          },
          {
            label: 'cold',
            url: '#',
          },
          {
            label: 'mysterious',
            url: '#',
          },
          {
            label: 'emotional',
            url: '#',
          },
          {
            label: 'happy',
            url: '#',
          }
        ],
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

  return (
    <ul className={styles.MainMenu}>
      <MainMenuItem label="free music" url="/" subMenuData={megaMenu1} />
      <MainMenuItem label="Creative Commons 4.0 license" url="/" />
      <MainMenuItem label="About the author" url="/" />
      <MainMenuItem label="Contact the author" url="/" />
    </ul>
  )
}

export default MainMenu;