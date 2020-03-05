import React from 'react';
import './ourServices.css';
import ScrollAnimation from 'react-animate-on-scroll';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const OurServices = () => {
    return (
        <div className="about">
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <h1>Our Services</h1>
            </ScrollAnimation>
            <hr/>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <p>There are many financial products in the market, and so choosing the ones that best meet an
                    individual
                    client’s needs can be complicated. Informed decisions about the products in any portfolio are best
                    made
                    after an assessment of personal needs. A selection from a comprehensive suite of products and
                    services
                    can then be made to address your unique situation.</p>
            </ScrollAnimation>
            <div className="products">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <h2><em>Products and services include</em></h2>
                </ScrollAnimation>
                <hr/>
                <ul className="list-style">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>Individual
                            Retirement Accounts
                        </li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>Roth IRA's</li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>529 qualified
                            tuition plans
                        </li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>Annuities</li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>Mutual Funds</li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>Employer Plan (401k,
                            403b, etc) fund recommendations
                        </li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>SIMPLE Plans and
                            Single K's
                        </li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>Life Insurance</li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>Long-Term Care
                            Insurance
                        </li>
                        <li><CheckCircleOutlineIcon style={{fontSize: '80%', paddingRight: '5px'}}/>Income Tax
                            preparation and planning
                        </li>
                    </ScrollAnimation>
                </ul>
            </div>

        </div>
    );
};

export default OurServices;