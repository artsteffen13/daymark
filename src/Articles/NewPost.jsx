import React, {useEffect, useState} from 'react';
import './articles.css';
import axios from 'axios';
import Auth from "./Auth";

const NewPost = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const token = localStorage.getItem('token');

    const [text, setText] = useState({
        title: '',
        author: '',
        submittedBy: '',
        submittedOn: `Submitted on ${months[new Date().getMonth()]} ${new Date().getDay()} ${new Date().getFullYear()}`,
        content: ''
    });

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        loginChange();
    },[]);

    const textChange = (e) => {
        const {name, value} = e.target;
        setText(prevValue => {
            return (
                {...prevValue, [name]: value}
            )
        })
    };

    const loginChange = () => {
        const expires = localStorage.getItem('expires') > new Date().getTime();
        if (token && expires) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    };

    const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('expires');
      loginChange();
    };

    const submit = (e) => {
        e.preventDefault();
        axios.post('https://daymark-1579288703772.firebaseio.com/blog.json?auth=' + token, text)
            .then(response => {
                setText({
                    title: '',
                    author: '',
                    submittedBy: '',
                    submittedOn: `Submitted on ${months[new Date().getMonth()]} ${new Date().getDay()} ${new Date().getFullYear()}`,
                    content: ''
                });
                alert('Success!')

            })
            .catch(err => {
                console.log(err);
                alert('Something went wrong, please try again - ' + err)
            })
    };

    if (!loggedIn) {
        return (
            <Auth
            change={loginChange}
            />
        )
    }

    return (
        <div className="about">

            <h1>Create A Post</h1>
            <hr/>
            <form
                onSubmit={submit}
                autoComplete='off'
                noValidate>
                <input
                    placeholder="Title"
                    name="title"
                    value={text.title}
                    onChange={textChange}
                />
                <input
                    placeholder="Submitted By"
                    name="submittedBy"
                    value={text.submittedBy}
                    onChange={textChange}
                />
                <input
                    placeholder="Author"
                    name="author"
                    value={text.author}
                    onChange={textChange}
                />
                <textarea
                    placeholder="Enter your content here"
                    name="content"
                    value={text.content}
                    onChange={textChange}
                />
                <button>Submit</button>
            </form>
            <button onClick={logout}>Logout</button>

        </div>
    );
};

export default NewPost;