import React from 'react';
import axios from "axios";
import UrlConst from "../resource/Url.js"

import { useNavigate, } from "react-router-dom";
import { AuthContext } from "../App.js";
import { useCookies } from 'react-cookie';

const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [isErrorInput, setIsErrorInput] = React.useState(false);

    const navigate = useNavigate();

    const handleLogin = async (username, password) => {      
      axios.post(UrlConst.LOGIN, {
        username, password
      }).then((res) => {
        setToken(res.data.token);
        navigate('/');
        setCookie('token', res.data.token, { path: '/' });
        setIsErrorInput(false)
      })
      .catch((err) => {
        setIsErrorInput(true)
      })
      
      // for fake API
      // var token = await fakeAuth()
      // setToken(token);
      // navigate('/');
      // setCookie('token', token, { path: '/' });
    };

    const handleSubmitSignUp = async (username, password, email) => {      
      axios.post(UrlConst.SIGNUP, {
        username, password, email
      }).then((res) => {
        setToken(res.data.token);
        navigate('/');
        setCookie('token', res.data.token, { path: '/' });
        setIsErrorInput(false)
      })
      .catch((err) => {
        setIsErrorInput(true)
      })
    };
  
    const handleLogout = (currToken) => {
      // at the time ( 19 january 2024 (UTC+08:00) ), somehow i can 
      // not directly using cookies state into headers
      // next find out why this happen
      axios({
        method: 'delete',
        url: UrlConst.LOGOUT,
        headers: {'Authorization': "Token " + currToken},
      }).then((res) => {
        setToken(null);
        removeCookie('token' ,{path:'/'})
        navigate('/login');
      })

      // setToken(null);
      // removeCookie('token' ,{path:'/'})
      // navigate('/login');
    };
  
    const handleSignUp = () => {
      navigate('/signup');
      setIsErrorInput(false)
    }

    const value = {
      token,
      handleLogin,
      handleLogout,
      handleSignUp,
      handleSubmitSignUp,
      isErrorInput,
    };

    // fake API
    // const fakeAuth = () =>
    //     new Promise((resolve) => {
    //     setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    // });
    
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthProvider;

