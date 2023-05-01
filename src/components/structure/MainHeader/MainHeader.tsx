import React, { useContext } from 'react';
import styles from './MainHeader.module.scss';
import { Container, Col, Row } from '../Grid/Grid';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import MainMenu from '../MainMenu/MainMenu';
import Context from '../Store/Store';

const MainHeader = () => {
    // const [state, setState] = useContext(Context);

    // const handleChange = (newState) => {
    //     setState(newState);
    // }

    return (
        <header className={styles.mainHeader}>
            <Container>
                <Row>
                    <Col columnClasses="col-xs-12 col-lg-4" className={styles.mainHeader__test}>
                        <Logo />
                        <Search />
                        {/* <MainMenu onChange={handleChange} /> */}
                        <MainMenu />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default MainHeader;