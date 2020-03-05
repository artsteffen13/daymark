import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import './resources.css';
import taxDocument from '../Documents/2019 Tax Packet.pdf';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';

const Resources = () => {
    return (
        <div className="about">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <h1>Resources</h1>
            </ScrollAnimation>
            <hr/>
            <div className="flex item">
                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <BusinessOutlinedIcon style={{fontSize: '250%'}}/>
                        <h2>Office Updates</h2>
                    </ScrollAnimation>
                        <hr/>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <ul className="list-style">
                            <li><a target="_blank" rel="noopener noreferrer" href={taxDocument}>2019 Tax Documents</a>
                            </li>
                        </ul>
                    </ScrollAnimation>
                </div>
                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <LanguageOutlinedIcon style={{fontSize: '250%'}}/>
                        <h2>Useful Websites</h2>
                    </ScrollAnimation>
                        <hr/>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <ul className="list-style">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.ssa.gov/">Social Security
                                Administration</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.irs.gov/">Internal
                                Revenue
                                Service</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.invesco.com/us/gateway">Oppenheimer
                                Funds</a></li>
                            <li><a target="_blank" rel="noopener noreferrer"
                                   href="https://www.allianzlife.com/">Allianz</a>
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://seic.com/">SEI Investment
                                Company</a></li>
                        </ul>
                    </ScrollAnimation>
                </div>
                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <MenuBookOutlinedIcon style={{fontSize: '250%'}}/>
                        <h2>News</h2>
                    </ScrollAnimation>
                        <hr/>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <ul className="list-style">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.wsj.com/">The Wall Street
                                Journal</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://www.ft.com/">Financial
                                Times</a>
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer"
                                   href="https://www.bloomberg.com/">Bloomberg</a>
                            </li>
                            <li><a target="_blank" rel="noopener noreferrer"
                                   href="https://money.cnn.com/data/world_markets/asia/">CNN Money World Markets Map</a>
                            </li>
                        </ul>
                    </ScrollAnimation>
                </div>
                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <ComputerOutlinedIcon style={{fontSize: '250%'}}/>
                        <h2>Calculators</h2>
                    </ScrollAnimation>
                        <hr/>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <ul className="list-style">
                            <li><a target="_blank" rel="noopener noreferrer"
                                   href="http://www.calcxml.com/do/savings-goal-calculator-how-much?teaser&c=4a4a4a">How
                                much should I save to reach my goal?</a></li>
                            {/*    <li><a target="_blank" rel="noopener noreferrer" href="">Should I adjust my payroll withholding?</a></li>*/}
                            <li><a target="_blank" rel="noopener noreferrer"
                                   href="http://www.calcxml.com/do/how-long-will-it-take-to-pay-off-my-credit-card?teaser&c=4a4a4a">How
                                long will it take to pay off my credit card(s)?</a></li>
                        </ul>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
        ;
};

export default Resources;