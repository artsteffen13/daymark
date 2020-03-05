import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const ContactItem = (props) => {
    return (
        <ScrollAnimation animateIn={props.in} animateOnce={props.once}>
            <img alt={props.name} src={props.image}/>
            <p style={{padding: "0"}}>{props.name}: <a
                href={`mailto:${props.email}?`}>{props.email}</a></p>
        </ScrollAnimation>
    );
};

export default ContactItem;