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
    <>
      <div className="form-container">
        <div>
          <h2 className="">Welcome To Check Weather</h2>
          <label htmlFor="title">{GeneralConst.USERNAME}</label><br />
          <input 
            type="text"
            name="username"
            onChange={(e)=>{updateForm(e)}}
          /><br />
          <label htmlFor="title">{GeneralConst.PASSWORD}</label><br />
          <input 
            type="text"
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
    </>
  )
}
  
export default LogIn