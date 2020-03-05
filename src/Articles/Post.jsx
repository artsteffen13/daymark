import React from 'react';
import './articles.css';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from "react-router-dom";

const Post = (props) => {
    return (
        <div className="posts">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <h1>{props.title}</h1>
                <h2><em>{props.submittedOn}</em></h2>
                <h2><em>Submitted by {props.submittedBy}</em></h2>
                <h2><em>Written by {props.author}</em></h2>
                <p>{props.content.slice(0, 300)}...<Link
                    to={{
                        pathname: '/articles/' + props.title, state: {
                            title: props.title,
                            submittedOn: props.submittedOn,
                            submittedBy: props.submittedBy,
                            author: props.author,
                            content: props.content
                        }
                    }}>Read
                    More</Link></p>
            </ScrollAnimation>
            <hr/>
        </div>

    );
};

export default Post;