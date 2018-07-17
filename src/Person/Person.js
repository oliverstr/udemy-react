import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>I'm a person named {props.name} and aged {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person;