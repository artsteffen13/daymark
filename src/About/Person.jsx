import React from 'react';
import './about.css';
import ScrollAnimation from "react-animate-on-scroll";

const Person = (props) => {
    return (
        <ScrollAnimation animateIn={props.in} animateOut={props.out} animateOnce={props.once}>
            <div className="info">
                <img alt={props.name} className={props.imageClass} src={props.imageName}/>
                <h2 className={props.textClass}>{props.name}</h2>
                <p className={props.textClass}>{props.info}</p>
            </div>
        </ScrollAnimation>
    );
};

export default Person;