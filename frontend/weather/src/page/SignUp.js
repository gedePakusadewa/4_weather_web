import { AuthContext } from "../App.js";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GeneralConst from "../resource/General.js"
import "../style.css";

const SignUp = () =>{
  const context = useContext(AuthContext);

  const [form, setForm] = useState({
    username:"",
    password:"",
    email:""
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
    <div className="signup-container">
      <div className="signup-wrapper">
        <div>
          <div className="title-login">{GeneralConst.SIGN_UP_TITLE}</div>
          {context.isErrorInput && (
            <p className="wrong-username-password">{GeneralConst.WRONG_INPUT_LOGIN}</p>
          )}
          <label htmlFor="title">{GeneralConst.USERNAME}</label><br />
          <input 
            type="text"
            name="username"
            onChange={(e)=>{updateForm(e)}}
          /><br />
          <label htmlFor="title">{GeneralConst.PASSWORD}</label><br />
          <input 
            type="password"
            name="password"
            onChange={(e)=>{updateForm(e)}}
          /><br />
          <label htmlFor="title">{GeneralConst.EMAIL}</label><br />
          <input 
            type="email"
            name="email"
            onChange={(e)=>{updateForm(e)}}
          /><br />
          <button
            className="btn btn-signup-submit"
            onClick={
              ()=>context.handleSubmitSignUp(
                form.username, 
                form.password, 
                form.email
              )
            }
          >
            {GeneralConst.SUBMIT}
          </button>
          <Link to="/">
          <button 
              className="btn btn-back-to-login"
            >
              {GeneralConst.BACK_TO_LOGIN}
            </button>
          </Link>
        </div>
      </div>      
    </div>
  )
}
  
export default SignUp