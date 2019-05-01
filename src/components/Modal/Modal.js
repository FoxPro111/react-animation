import React from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
    return (
        <Transition
            in={props.opened}
            mountOnEnter
            unmountOnExit
            timeout={animationTiming} >
            {state => {
                const classes = ['Modal'];

                if (state === 'entering') {
                    classes.push('is-opened');
                } else if (state === 'exiting') {
                    classes.push('is-closed');
                }

                return (
                    <div className={classes.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                )
            }}
        </Transition>
    )
};

export default modal;