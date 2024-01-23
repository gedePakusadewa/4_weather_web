import { AuthContext } from "../App.js";
import { useContext, useState } from "react";
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
    <>
      <div className="form-container">
        <div>
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
          className="btn btn-signup"
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
        </div>
      </div>      
    </>
  )
}
  
export default SignUp