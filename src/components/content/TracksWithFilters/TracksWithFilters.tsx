import React from "react";
import styles from './TracksWithFilters.module.scss';
import { Container, Col } from '../../structure/Grid/Grid';
import TaxonomyFilterList from '../TaxonomyFilterList/TaxonomyFilterList';

const moods = [
  'warm',
  'cold',
  'mysterious',
  'emotional',
  'happy',
  'sad',
  'melancholic',
  'romantic',
  'calm',
  'energeting/action',
  'motivation',
  'upbeat',
]

const instruments = [
  'synth',
  'piano',
  'drums',
  'bass',
  'double bass',
];

const TracksWithFilters = () => {
  return (
    <section className={styles.tracksWithFilters}>
      <Container classes={'containerTwoColumns'}>
        <h2 className={styles.tracksWithFilters__sectionHeading}>Free music</h2>
        <h3 className={styles.tracksWithFilters__sectionSubheading}>(Creative Commons)</h3>
        <Col>
          <TaxonomyFilterList title="by mood" taxonomies={moods}></TaxonomyFilterList>
          <TaxonomyFilterList title="by instrument" taxonomies={instruments}></TaxonomyFilterList>
        </Col>
        <Col>
          dssddssd
        </Col>
      </Container>
    </section>
  );
}

export default TracksWithFilters;