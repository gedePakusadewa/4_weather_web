import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js"
import UrlConst from "../resource/Url.js"
import axios from "axios";
import "../style.css";

const Profile = () =>{
  const [city, setCity] = useState("")
  const [form, setForm] = useState({
    username:"",
    email:""
  });

  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {    
    axios({
      method: 'get',
      url: UrlConst.GETPROFILE,
      headers: {'Authorization': "Token " + cookies['token']},
    }).then((res) => {
      setCity(res.data.setting.city)
      setForm({
        username: res.data.user.username,
        email: res.data.user.email
      })
    })
  };

  const onSubmit = () => {    
    axios({
      method: 'post',
      url: UrlConst.GETPROFILE,
      data: {
        username:form.username,
        email:form.email
      },
      headers: {'Authorization': "Token " + cookies['token']},
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

  return(
    <>
      <Navbar />
      <div className="title-container">
        <h1>{GeneralConst.PROFILE}</h1>
      </div>
      <div>
        <label htmlFor="title">{GeneralConst.USERNAME}</label><br />
        <input 
          type="input"
          defaultValue={form.username}
          name="username"
          onChange={
            (e) => {updateForm(e)}
          }
        /><br />
        <label htmlFor="title">{GeneralConst.EMAIL}</label><br />
        <input
          type="email"
          name="email"
          defaultValue={form.email}
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
        <button
          onClick={onSubmit}
        >
          Update
        </button>
      </div>
    </>
  )
}

export default Profile