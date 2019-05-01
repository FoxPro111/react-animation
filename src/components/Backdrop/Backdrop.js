import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const classes = ['Backdrop'];

    if (props.visibled) {
        classes.push('is-visible');
    }

    return (
        <div className={classes.join(' ')} onClick={props.clicked}></div>
    )
};

export default backdrop;