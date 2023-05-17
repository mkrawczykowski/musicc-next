import React, { useRef } from 'react';
import Link from 'next/link';
import MegaMenuPanel from '../MegaMenuPanel/MegaMenuPanel';
interface MainMenuItemProps {
  label: string,
  url: string,
  subMenuData?: any,
  hasChildren: boolean,
}

const MainMenuItem = ({ label, url, subMenuData }: MainMenuItemProps) => {
  const ref = useRef(null);
  const handleLinkClick = (event) => {
    console.log(ref.current)
  }
  return (
    <li>
      <Link href={url} legacyBehavior>
        <a href="" ref={ref} onClick={handleLinkClick}>{label}</a>
      </Link>
      {subMenuData ? <MegaMenuPanel megaMenuType='mega_menu_1' subMenuData={subMenuData} /> : null}
    </li>
  )
}

export default MainMenuItem;