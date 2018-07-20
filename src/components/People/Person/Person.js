import React, { Fragment } from 'react';
import styles from './Person.css';
import addClass from '../../../hoc/addClass2ndOption';

const person = (props) => {

    return (
        <Fragment>
            <p onClick={props.click}>I'm a person named {props.name} and aged {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </Fragment>
    )
}

export default addClass(person, styles.Person);