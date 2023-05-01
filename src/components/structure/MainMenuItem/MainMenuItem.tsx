import React from 'react';
import Link from 'next/link';
import MegaMenuPanel from '../MegaMenuPanel/MegaMenuPanel';

const MainMenuItem = ({ label, url }) => {
  return (
    <li>
      <Link href={url}>
        {label}
      </Link>
      <MegaMenuPanel megaMenuType='mega_menu_1' />
    </li>
  )
}

export default MainMenuItem;