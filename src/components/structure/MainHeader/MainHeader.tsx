import react from 'react';
import styles from './MainHeader.module.scss';
import { Container, Col, Row } from '../Grid/Grid';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import MainMenu from '../MainMenu/MainMenu';

const MainHeader = () => {
    return (
        <header className={styles.mainHeader}>
            <Container>
                <Row>
                    <Col classes="col-xs-12 col-lg-4">
                        <Logo />
                        <Search />
                        <MainMenu />
                    </Col>
                </Row>
            </Container>
        </header>

    )
}

export default MainHeader;