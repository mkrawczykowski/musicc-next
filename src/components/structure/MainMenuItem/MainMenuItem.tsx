import React from 'react';
import Link from 'next/link';
import MegaMenuPanel from '../MegaMenuPanel/MegaMenuPanel';

const MainMenuItem = ({ label, url }) => {
  return (
    <li>
      <Link href={url}>
        {label}
      </Link>
      <MegaMenuPanel />
    </li>
  )
}

export default MainMenuItem;