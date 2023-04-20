import React from 'react';
import styles from './Grid.module.scss';

const Container = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

const Row = ({ children }) => {
    return (
        <div className={styles.row}>
            {children}
        </div>
    )
}

const Col = ({ children, classes, className }) => {
    const splitClasses = classes.split(' ');

    const reactifySplitClass = (classToReactify) => {

        let charPosition = 0;
        let dashPosition = 0;
        let uppercasedClass = '';
        let removedDashClass = '';

        while (charPosition < classToReactify.length && dashPosition >= 0) {
            dashPosition = classToReactify.indexOf('-', charPosition);

            const replaceAt = (whereToReplace, whatPosition, newValue) => {
                return whereToReplace.substring(0, whatPosition) + newValue + whereToReplace.substring(whatPosition + 1);
            }

            if (dashPosition > 0) {
                uppercasedClass = replaceAt(classToReactify, dashPosition + 1, classToReactify[dashPosition + 1].toUpperCase());
                removedDashClass = replaceAt(uppercasedClass, dashPosition, '');
            }

            charPosition = dashPosition + 1;
            classToReactify = removedDashClass;
        }
        return styles[removedDashClass];
    }

    let reactifiedClasses = '';
    splitClasses.map((splitClass) => {
        reactifiedClasses += styles[splitClass];
        reactifiedClasses += ' ';
    })
    console.log(className);

    return (
        <div className={[styles.col, reactifiedClasses, className].join(' ')}>
            {children}
        </div>
    )
}

Col.defaultProps = {
    classes: '',
}

export { Container, Row, Col };