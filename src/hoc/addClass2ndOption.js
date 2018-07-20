import React from 'react';

const addClass = (WrappedComponent, classes) => {
    return (props) => (
        <div className={classes}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default addClass;