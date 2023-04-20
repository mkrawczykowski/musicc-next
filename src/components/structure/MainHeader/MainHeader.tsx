import react from 'react';
import styles from './MainHeader.module.scss';
import { Container, Col, Row } from '../Grid/Grid';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

const MainHeader = () => {
    return (
        <header className={styles.mainHeader}>
            <Container>
                <Row>
                    <Col classes="col-xs-12 col-lg-4" className={styles.mainHeader__structure}>
                        <Logo />

                        <Search />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default MainHeader;