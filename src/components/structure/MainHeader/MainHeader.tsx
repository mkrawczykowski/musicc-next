import React, { useContext } from 'react';
import styles from './MainHeader.module.scss';
import { Container, Col } from '../Grid/Grid';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import MainMenu from '../MainMenu/MainMenu';
import Context from '../Store/Store';

const MainHeader = () => {
    return (<></>
        // <div className={styles.mainHeader}>
        //     <Container>
        //         <Row>
        //             <Col classes="col-xs-12 col-lg-4" className={styles.mainHeader__structure}>
        //                 <Logo />

        //                 <Search />
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
    )
}

export default MainHeader;