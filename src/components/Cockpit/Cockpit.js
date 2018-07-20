import React from 'react';
import styles from './Cockpit.css'

const Cockpit = ({people, showPeople, click, appTitle}) => {

    const classes = [];
    let buttonClass = '';

    if(showPeople){
        buttonClass = styles.Red;
    }

    if (people.length <= 2) {
      classes.push(styles.red);
    }
    if (people.length <= 1) {
      classes.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{appTitle}</h1>
            <p className={classes.join(' ')}>People names</p>
            <button className={buttonClass}
            onClick={() => click('Oliver Strobel')}>Toggle people</button>
        </div>
    );
}

export default Cockpit;