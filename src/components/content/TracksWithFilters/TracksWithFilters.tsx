import React from "react";
import styles from './TracksWithFilters.module.scss';
import { Container, Col } from '../../structure/Grid/Grid';

function TracksWithFilters() {
  console.log(styles);
  return (
    <section className={styles.tracksWithFilters}>
      <Container classes={'containerTwoColumns'}>
        <Col>
          ssdsdsds
        </Col>
        <Col>
          dssddssd
        </Col>
      </Container>
    </section>

  );
}

export default TracksWithFilters;