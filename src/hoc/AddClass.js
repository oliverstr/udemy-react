import React from 'react';

const AddClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
)

export default AddClass;