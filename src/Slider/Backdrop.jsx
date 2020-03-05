import React from 'react';
import './slider.css';

const Backdrop = (props) => {
    return (
        <div
            className="backdrop"
            style={{display: props.show}}
            onClick={props.clicked}
        >

        </div>
    );
};

export default Backdrop;