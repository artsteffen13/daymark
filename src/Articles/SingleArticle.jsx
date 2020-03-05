import React, {useEffect} from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SingleArticle = (props) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);

    return (
        <div className="about posts">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <h1>{props.location.state.title}</h1>
                <h2><em>{props.location.state.submittedOn}</em></h2>
                <h2><em>Submitted by {props.location.state.submittedBy}</em></h2>
                <h2><em>Written by {props.location.state.author}</em></h2>
                <p>{props.location.state.content}</p>
                <p onClick={props.history.goBack} style={{color: 'blue', cursor: 'pointer'}}>Go Back</p>
            </ScrollAnimation>
        </div>
    );
};

export default SingleArticle;