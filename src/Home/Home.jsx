import React from 'react';
import group from '../Images/group.jpg';
import './home.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
    return (
        <div>
            <div className="around-image">
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <img alt="group" className="group-img" src={group}/>
                </ScrollAnimation>
            </div>
            <div className="welcome-text-box">
                <ScrollAnimation animateIn="fadeInDown" duration={2} animateOnce={true}>
                    <h1><em style={{textShadow: "1px 1px 5px #afd91a", fontSize: "140%"}}>Why</em> <em>Daymark Financial
                        Solutions?</em></h1>
                </ScrollAnimation>
                <hr/>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <p>We recognize that the financial world is constantly changing and evolving and understand that
                        being a
                        leader in the industry means staying <em>ahead</em> of the game and changing with it. That
                        change begins with
                        creating an excellent customer service experience. As you know, we have always had a strong
                        passion
                        and commitment for assisting our clients in pursuing their personal financial goals, and we
                        wanted a
                        name that would reflect that passion. The name Daymark was chosen because we want to be a
                        constant
                        guide that helps you successfully pilot your way to your financial goals, no matter what
                        obstacles
                        you may encounter on your journey.</p>
                    <hr/>
                    <p>Official definition of a Daymark: Similar to a lighthouse at night, a Daymark serves as a marker
                        visible to pilots as a navigational aid in daylight.</p>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Home;