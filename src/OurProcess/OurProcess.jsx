import React from 'react';
import './ourProcess.css';
import ScrollAnimation from 'react-animate-on-scroll';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';

const OurProcess = () => {
    return (
        <div className="about">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <h1>Our Process</h1>
            </ScrollAnimation>
            <hr/>

                <div className="flex">
                    <div className="container">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <MeetingRoomOutlinedIcon style={{fontSize: '250%'}}/>
                        <h2>
                            Initial Meeting
                        </h2>
                        </ScrollAnimation>
                        <hr/>
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                        <p>During the initial meeting, we will briefly review the financial information that you have
                            provided and then discuss your needs, goals, and expectations.</p>
                        </ScrollAnimation>
                    </div>
                    <div className="container">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <CreateOutlinedIcon style={{fontSize: '250%'}}/>
                        <h2>
                            Plan Development
                        </h2>
                        </ScrollAnimation>
                        <hr/>
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                        <p>After evaluating your individual financial situation, we will prepare a tailored,
                            comprehensive
                            plan that will outline step-by-step instructions on how to proceed.</p>
                        </ScrollAnimation>
                    </div>
                    <div className="container">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                            <AssignmentLateOutlinedIcon style={{fontSize: '250%'}}/>
                        <h2>
                            Periodic Review
                        </h2>
                        </ScrollAnimation>
                        <hr/>
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                        <p>With your input and participation, we will implement your personalized plan. As life changes,
                            your goals may also change. We will periodically review your plan to address any new
                            challenges
                            that may arise, analyze your investment portfolio and its performance, and make any
                            necessary
                            adjustments.</p>
                        </ScrollAnimation>
                    </div>

                </div>
        </div>
    );
};

export default OurProcess;