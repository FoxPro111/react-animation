import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
    return (
        <CSSTransition
            in={props.opened}
            mountOnEnter
            unmountOnExit
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'is-opened',
                exit: '',
                exitActive: 'is-closed',
            }} >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    )
};

export default modal;