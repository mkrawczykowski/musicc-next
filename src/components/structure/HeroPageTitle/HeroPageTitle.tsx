import React from 'react';
import style from './HeroPageTitle.module.scss';
import { Container, Col } from '../Grid/Grid';
import HeadingSubheading from '../../content/HeadingSubheading/HeadingSubheading';

const HeroPageTitle = () => {
  return (
    <section className={style.heroPageTitle}>
      <Container>
        <Col>
          <HeadingSubheading
            mainHeadingType="h1"
            secondaryHeadingType="h2"
            mainHeadingString="testing heading"
            secondaryHeadingString="test string secondary" />
        </Col>
      </Container>
    </section>
  )
}

export default HeroPageTitle;