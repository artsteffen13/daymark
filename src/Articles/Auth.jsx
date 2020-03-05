import React, {useState} from 'react';
import axios from "axios";

const Auth = (props) => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const userLogin = (e) => {
        e.preventDefault();
        const authData = {
            email: loginInfo.email,
            password: loginInfo.password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDGLhUvOWsCLdDppy7Ksu5VBRq_P4FmrLY', authData)
            .then(response => {
                const expireTime = +response.data.expiresIn *1000 + new Date().getTime();
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expires', expireTime);
                props.change();
            })
            .catch(err => {
                console.log(err)
            })
    };

    const textChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo(prevValue => {
            return (
                {...prevValue, [name]: value}
            )
        })
    };

    return (
        <div className="about">
            <h1>Log In</h1>
            <form
                onSubmit={userLogin}
                autoComplete='off'
                noValidate>
            <input
                placeholder="Email"
                name="email"
                value={loginInfo.email}
                onChange={textChange}
            />
            <input
                placeholder="Password"
                name="password"
                type="password"
                value={loginInfo.password}
                onChange={textChange}
            />
            <button>Login</button>
            </form>

        </div>
    );
};

export default Auth;