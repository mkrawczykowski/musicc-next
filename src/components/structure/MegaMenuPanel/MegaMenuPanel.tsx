import React from 'react';
import MegaMenuTypeOne from '../MegaMenuTypeOne/MegaMenuTypeOne';

const MegaMenuPanel = ({ megaMenuType }) => {
  switch (megaMenuType) {
    case 'mega_menu_1':
      return <MegaMenuTypeOne />;
      // return 'testing...';
      break;
    default: return <p>no data</p>
  }
}

export default MegaMenuPanel;