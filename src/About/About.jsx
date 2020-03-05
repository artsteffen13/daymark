import React from 'react';
import group2 from '../Images/group2.jpg';
import derrick from '../Images/derrick.jpeg'
import christina from '../Images/christina.jpg'
import denise from '../Images/denise.jpg'
import emily from '../Images/emily.jpg'
import './about.css';
import Person from "./Person";

const About = () => {
    return (
        <div className="about">
            <Person
                in="fadeInLeft"
                once={true}
                imageClass="image-left"
                textClass="text-left"
                name="Derrick Hamm"
                imageName={derrick}
                info="As a Registered Representative for SCF Securities, Derrick guides clients in
                    making their financial
                    decisions. Since 1996, he has made it his passion to help individuals pursue their financial goals,
                    while balancing their risk tolerance, time frame and any obstacles that may present themselves.
                    Additionally, by participating in various educational opportunities, Derrick's expertise continues
                    to grow to support the changing needs of the financial community. Outside the office, Derrick
                    volunteers for his church and animal rescue shelters. He and his wife, Ann, also enjoy in all kinds
                    of outdoor activities, such as biking and running."
            />
            <hr className="hr"/>

            <Person
                in="fadeInRight"
                once={true}
                imageClass="image-right"
                textClass="text-right"
                name="Denise Moscarell"
                imageName={denise}
                info="Denise Moscarell, Financial Assistant, provides client service and investment
                    related support. She has been in the financial services industry since 1992, and enjoys helping
                    people pursue their personal financial goals. Away from work, she enjoys spending time with family
                    and friends, travel, car shows, and live music. Denise lives in Dover with her rescue dog,
                    Peanut."
            />
            <hr className="hr"/>

            <Person
                in="fadeInLeft"
                once={true}
                imageClass="image-left"
                textClass="text-left"
                name="Christina Runkle"
                imageName={christina}
                info="Christina Runkle, Tax Assistant, provides tax support for clients as well as
                    the Daymark staff. Outside of work, Christina enjoys reading as well as a number of outdoor
                    activities such as: hiking, paddle boarding, climbing and boating. She and her husband, Cole, live
                    in Windsor with their three rescued hound dogs, Elsa, Moose, and Grif."
            />

            <hr className="hr"/>

            <Person
                in="fadeInRight"
                once={true}
                imageClass="image-right"
                textClass="text-right"
                name="Emily Throckmorton"
                imageName={emily}
                info="Emily Throckmorton, Receptionist, helps with administrative duties at the
                    front desk and provides assistance throughout the office. In her down time, Emily enjoys reading and
                    playing the keyboard. She also spends time performing with her band and traveling. She and her
                    husband, Dave, reside in York."
            />

            <div>
                <img alt="group 2" className="group2" src={group2}/>
            </div>

        </div>
    );
};

export default About;