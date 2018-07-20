import React from 'react';
import styles from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = ({people, showPeople, click, appTitle}) => {

    const classes = [];
    let buttonClass = styles.Button;

    if(showPeople){
        buttonClass += ' ' + styles.Red;
    }

    if (people.length <= 2) {
      classes.push(styles.red);
    }
    if (people.length <= 1) {
      classes.push(styles.bold);
    }

    return (
        // Aux prevents having to create another div. It only prints whatever children it has and only works on React 16+
        <Aux> 
            <h1>{appTitle}</h1>
            <p className={classes.join(' ')}>People names</p>
            <button className={buttonClass}
            onClick={() => click('Oliver Strobel')}>Toggle people</button>
        </Aux>
    );
}

export default Cockpit;