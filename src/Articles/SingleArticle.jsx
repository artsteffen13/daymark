import React, {useEffect, useState} from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import Loader from "../Loader/Loader";


const SingleArticle = (props) => {
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const searchParams = window.location.search;
    const removeQuestionMark = searchParams.slice(1, searchParams.length);
    const finalValue = removeQuestionMark.replace(/%20/g, ' ');

    useEffect(() => {
        axios.get(`https://daymark-1579288703772.firebaseio.com/blog.json?orderBy="title"&equalTo="${finalValue}"`)
            .then(res => {
                const item = Object.values(res.data);
                item.map(item => {
                    return (
                        setArticle(item)
                )
                });
                setIsLoading(false);
            })
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, []);

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <div className="about posts">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                <h1>{article.title}</h1>
                <h2><em>{article.submittedOn}</em></h2>
                <h2><em>Submitted by {article.submittedBy}</em></h2>
                <h2><em>Written by {article.author}</em></h2>
                <p>{article.content}</p>
                <p onClick={props.history.goBack} style={{color: 'blue', cursor: 'pointer'}}>Go Back</p>
            </ScrollAnimation>
        </div>
    );
};

export default SingleArticle;