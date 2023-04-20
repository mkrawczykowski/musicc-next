import React from 'react';
import Link from 'next/link';
import MegaMenuPanel from '../MegaMenuPanel/MegaMenuPanel';

const MainMenuItem = ({ label, url, megaMenuType }) => {
  return (
    <li>
      <Link href={url}>
        {label}
      </Link>
      <MegaMenuPanel type={megaMenuType} />
    </li>
  )
}

export default MainMenuItem;