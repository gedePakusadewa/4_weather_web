import { AuthContext } from "../App.js";
import { useContext, useState } from "react";
import GeneralConst from "../resource/General.js"
import "../style.css";

const LogIn = () =>{
  const context = useContext(AuthContext);

  const [form, setForm] = useState({
    username:"",
    password:""
  });

  const updateForm = (e)  =>{
    setForm(previousState =>{
      return { 
        ...previousState,
        [e.target.name]:e.target.value
      }
    });
  }

  return(
    <div className="login-container">
      <div className="login-wrapper">
        <div>
          <div className="title-login">{GeneralConst.LOGIN_TITLE}</div>
          {context.isErrorInput && (
            <p className="wrong-username-password">{GeneralConst.WRONG_INPUT_LOGIN}</p>
          )}
          <label htmlFor="username">{GeneralConst.USERNAME}</label><br />
          <input 
            type="text"
            name="username"
            onChange={(e)=>{updateForm(e)}}
          /><br />
          <label htmlFor="password">{GeneralConst.PASSWORD}</label><br />
          <input 
            type="password"
            name="password"
            onChange={(e)=>{updateForm(e)}}
          /><br />
          <button
            className="btn btn-login" 
            onClick={()=>context.handleLogin(form.username, form.password)}
          >
            {GeneralConst.LOGIN}
          </button>
          <button
            className="btn btn-signup" 
            onClick={()=>context.handleSignUp()}
          >
            {GeneralConst.SIGNUP}
          </button>
        </div>
      </div>
    </div>
  )
}
  
export default LogIn