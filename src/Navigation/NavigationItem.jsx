import React from 'react';
import {NavLink} from "react-router-dom";
import './navigationitem.css';

const NavigationItem = (props) => {
    return (
        <li className="navigation">
            <NavLink exact activeClassName="active" to={props.link}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;