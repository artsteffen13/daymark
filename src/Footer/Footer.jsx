import React from 'react';
import './footer.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {
    return (
        <div className="footer padding">
            <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
            <p>3497 Industrial Drive, York, PA 17402</p>
            <p>Securities offered through SCF Securities, Inc. • Member FINRA/SIPC • 155 E. Shaw Ave., Suite 102,
                Fresno, CA 93710 • 800.955.2517 • 559.456.6109 FAX. Investment advisory services offered through SCF
                Investment Advisors Inc. SCF Securities, Inc. and Daymark Financial Solutions are independently owned
                and operated. </p>
            <p>Securities offerings limited to residents of Arizona, California, Colorado, Delaware, Florida, Georgia,
                Illinois, Kansas, Massachusetts, Maryland, Michigan, Minnesota, New Hampshire, New Jersey, New York,
                Pennsylvania, South Carolina, Virginia, Wisconsin and Wyoming​</p>
            <p>PA Ins. Lic#: 411868​. Copyright © {new Date().getFullYear()} Daymark Financial Solutions. All rights
                reserved.</p>
            </ScrollAnimation>

        </div>
    );
};

export default Footer;