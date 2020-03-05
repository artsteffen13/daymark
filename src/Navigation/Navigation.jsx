import React from 'react';
import NavigationItem from "./NavigationItem";
import './navigation.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "../Slider/Slider";

const Navigation = () => {
    return (
            <ul className="nav">
                <Slider/>
                <ScrollAnimation animateIn="fadeInLeft nav-item size home" animateOnce={true}>
                <NavigationItem link="/">
                    Home
                </NavigationItem>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown nav-item size about-us" animateOnce={true}>
                <NavigationItem link="/about">
                    About
                </NavigationItem>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp nav-item size our-process" animateOnce={true}>
                <NavigationItem link="/our-process">
                    Our Process
                </NavigationItem>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown nav-item size our-services" animateOnce={true}>
                <NavigationItem link="/our-services">
                    Our Services
                </NavigationItem>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp nav-item size resources" animateOnce={true}>
                <NavigationItem link="/resources">
                    Resources
                </NavigationItem>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInDown nav-item size articles" animateOnce={true}>
                <NavigationItem link="/articles">
                    Articles
                </NavigationItem>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight nav-item size contact-us" animateOnce={true}>
                <NavigationItem link="/contact">
                    Contact
                </NavigationItem>
                </ScrollAnimation>
            </ul>
    );
};

export default Navigation;