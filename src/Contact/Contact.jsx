import React from 'react';
import './contact.css';
import derrick from '../Images/derrick.jpeg';
import denise from '../Images/denise.jpg';
import christina from '../Images/christina.jpg';
import emily from '../Images/emily.jpg';
import ScrollAnimation from "react-animate-on-scroll";
import ContactItem from "./ContactItem";
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

const Contact = () => {

    return (
        <div className="about">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <h1>Contact Us</h1>
            </ScrollAnimation>
            <hr/>
            <div className="container2">
                <ContactItem
                in="fadeIn"
                once={true}
                name="Derrick Hamm"
                email="dhamm@daymarkfinancial.com"
                image={derrick}
                />
                <ContactItem
                    in="fadeIn"
                    once={true}
                    name="Denise Moscarell"
                    email="dmoscarell@daymarkfinancial.com"
                    image={denise}
                />
                <ContactItem
                    in="fadeIn"
                    once={true}
                    name="Christina Runkle"
                    email="crunkle@daymarkfinancial.com"
                    image={christina}
                />
                <ContactItem
                    in="fadeIn"
                    once={true}
                    name="Emily Throckmorton"
                    email="emily@daymarkfinancial.com"
                    image={emily}
                />
            </div>
            <hr/>
            <div className="container2">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <PhoneIcon style={{fontSize: '200%'}}/>
                    <p>Phone: 717-840-0749<br/>
                        Fax: 717-840-0754<br/>
                        Toll Free: 800-745-8169</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <HomeIcon style={{fontSize: '200%'}}/>
                    <p>3497 Industrial Drive<br/>
                        York, Pennsylvania<br/>
                        17402-9051</p>
                </ScrollAnimation>
            </div>
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <iframe title="Google Maps" style={{
                        frameBorder: "0"
                    }}
                            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0-K5cZ2PyIkR9sBW3rBh7fo&key=AIzaSyCiivNytrvEu4ySpGcqYQUAt2OWfhnanFE"
                            allowFullScreen/>
                </ScrollAnimation>
            </div>

        </div>
    );
};

export default Contact;