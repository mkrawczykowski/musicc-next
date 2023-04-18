import react from 'react';
import styles from './MainHeader.module.scss';
import {Col, Container, Row} from '../Grid/Grid';
import Logo from '../Logo/Logo';

const MainHeader = () => {
    return (
        <header className={styles.mainHeader}>
            <Container>
                <Row>
                    <Col classes="col-lg-6">
                        <Logo/>
                    </Col>
                </Row>
            </Container>
        </header>
        
    )
}

export default MainHeader;