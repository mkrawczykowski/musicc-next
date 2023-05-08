import React from 'react';
import Link from 'next/link';
import MegaMenuPanel from '../MegaMenuPanel/MegaMenuPanel';

interface MainMenuItemProps {
  label: string,
  url: string,
  subMenuData?: any
}

const MainMenuItem = ({ label, url, subMenuData }: MainMenuItemProps) => {
  return (
    <li>
      <Link href={url}>
        {label}
      </Link>
      <MegaMenuPanel megaMenuType='mega_menu_1' subMenuData={subMenuData} />
    </li>
  )
}

export default MainMenuItem;