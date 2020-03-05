import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Post from "./Post";
import Loader from "../Loader/Loader";

const Articles = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://daymark-1579288703772.firebaseio.com/blog.json')
            .then(response => {
                const responseArray = Object.values(response.data);
                setPosts(responseArray.reverse());
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <div className="about">
            {posts.map((item, id) => {
                return (
                    <Post
                    key={id}
                    title={item.title}
                    author={item.author}
                    submittedBy={item.submittedBy}
                    submittedOn={item.submittedOn}
                    content={item.content}
                    />
                )
            })}
        </div>
    );
};

export default Articles;