import React, {useState} from 'react';
import Backdrop from "./Backdrop";
import NavigationItem from "../Navigation/NavigationItem";
import MenuIcon from "./MenuIcon";
import './slider.css';

const Slider = () => {
    const [openMenu, setOpenMenu] = useState('slider close');
    const [showBackdrop, setShowBackdrop] = useState('none');

    const clicked = () => {
        if (openMenu === 'slider close') {
            setOpenMenu('slider open fadeIn');
            setShowBackdrop('inherit');

        } else {
            setOpenMenu('slider close');
            setShowBackdrop('none')
        }
    };

    return (
        <>

            <Backdrop
                show={showBackdrop}
                clicked={clicked}
            />
            <MenuIcon
                clicked={clicked}
            />
            <div
                className={openMenu}
                onClick={clicked}
            >
                <nav>
                    <NavigationItem link="/">
                        Home
                    </NavigationItem>
                    <NavigationItem link="/about">
                        About
                    </NavigationItem>
                    <NavigationItem link="/our-process">
                        Our Process
                    </NavigationItem>
                    <NavigationItem link="/our-services">
                        Our Services
                    </NavigationItem>
                    <NavigationItem link="/resources">
                        Resources
                    </NavigationItem>
                    <NavigationItem link="/articles">
                        Articles
                    </NavigationItem>
                    <NavigationItem link="/contact">
                        Contact
                    </NavigationItem>
                </nav>
            </div>
        </>
    );
};

export default Slider;