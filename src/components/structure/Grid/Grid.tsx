import React from 'react';
import styles from './Grid.module.scss';

const Container = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

const Row = ({children}) => {
    return(
        <div className={styles.row}>
            {children}
        </div>
    )
}

const Col = ({children, classes}) => {
    const splitClasses = classes.split(' ');

    let separatedClasses = '';
    splitClasses.map((splitClass) => {
        separatedClasses += styles[splitClass];
        separatedClasses += ' ';
    })
    
    return(
        <div className={[styles.col, separatedClasses].join(' ')}>
            {children}
        </div>
    )
}

Col.defaultProps = {
    classes: '',
}

export {Container, Row, Col};