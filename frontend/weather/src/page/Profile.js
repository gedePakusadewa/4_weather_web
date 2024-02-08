import { useEffect, useState } from "react";
import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js"
import UrlConst from "../resource/Url.js"
import axios from "axios";
import "../style.css";

const Profile = () =>{
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")

  const [form, setForm] = useState({
    username:"",
    email:""
  });

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {    
    axios({
      method: 'get',
      url: UrlConst.GETPROFILE,
      headers: {'Authorization': "Token " + "3d0adf1672d2a823194b0ef42daa5bef49776df6"},
    }).then((res) => {
      setUsername(res.data.user.username)
      setEmail(res.data.user.email)
      setCity(res.data.setting.city)
    })
  };

  const updateForm = (e) =>{
    setForm(previousState =>{
      return { 
        ...previousState,
        [e.target.name]:e.target.value
      }
    });
  }

  const InputBiodata = () => {
    return(
      <div>
        <label htmlFor="title">{GeneralConst.USERNAME}</label><br />
        <input 
          type="input"
          defaultValue={username}
          onChange={
            (e) => {updateForm(e)}
          }
        /><br />
        <label htmlFor="title">{GeneralConst.EMAIL}</label><br />
        <input
          type="email"
          defaultValue={email}
          onChange={
            (e) => {updateForm(e)}
          }
        /><br />
        <label htmlFor="title">{GeneralConst.INPUT_CITY_TITLE}</label><br />
        <input
          type="input"
          value={city}
          disabled={true}
        /><br />
      </div>
    )
  }

  return(
    <>
      <Navbar />
      <div className="title-container">
        <h1>{GeneralConst.PROFILE}</h1>
      </div>
      <InputBiodata />
    </>
  )
}

export default Profile