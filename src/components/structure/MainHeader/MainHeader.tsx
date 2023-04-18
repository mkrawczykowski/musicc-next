import react from 'react';
import styles from './MainHeader.module.scss';
import {Col, Container, Row} from '../Grid/Grid';

const MainHeader = () => {
    return (
        <header className={styles.mainHeader}>
            <Container>
                <Row>
                    <Col classes="col-lg-6">
                        <h1>head</h1>
                    </Col>
                </Row>
            </Container>
        </header>
        
    )
}

export default MainHeader;