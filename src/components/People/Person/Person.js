import React, { Fragment } from 'react';
import styles from './Person.css';
import addClass from '../../../hoc/addClass2ndOption';
import { AuthContext } from '../../../containers/App';

const person = (props) => {

    return (
        <Fragment>
            <AuthContext.Consumer>
                {auth => auth ? 'I am logged in' : null}
            </AuthContext.Consumer>
            <p onClick={props.click}>I'm a person named {props.name} and aged {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </Fragment>
    )
}

export default addClass(person, styles.Person);