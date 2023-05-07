import React from 'react';
import styles from './SectionAboutMe.module.scss';
import { Container, Col } from '../../structure/Grid/Grid';

const SectionAboutMe = () => {
  return (
    <section className={styles.sectionAboutMe}>
      <Container classes={'containerTwoColumns'}>
        <Col>
          <h2 className={styles.sectionAboutMe__heading}>Im Michael</h2>
          <h3 className={styles.sectionAboutMe__subHeading}>a front end developer from Poland</h3>
          <p>
            In my spare time I change my computer keyboard to MIDI keyboard and have fun composing music.
          </p>
          <a href="#">Read more</a>
        </Col>
        <Col>

        </Col>
      </Container>
    </section>
  )
}