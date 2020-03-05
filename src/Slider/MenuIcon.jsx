import React from 'react';
import ListIcon from '@material-ui/icons/List';
import './slider.css';

const MenuIcon = (props) => {
    return (
        <div className="icon">
            <ListIcon onClick={props.clicked} style={{color: "white", fontSize: "70px"}}/>
        </div>
    );
};

export default MenuIcon;