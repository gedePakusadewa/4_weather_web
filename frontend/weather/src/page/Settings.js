import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js";
import axios from "axios";
import UrlConst from "../resource/Url.js";
import { InputIsDarkMode } from "../component/Input.js";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import "../style.css";

const Setting = () =>{
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState("")

  const [cookies, setCookie] = useCookies(['user']);

  useEffect(() => {
    axios({
      method: 'get',
      url: UrlConst.GETSETTING,
      headers: {'Authorization': "Token " + cookies['token']},
    }).then((res) => {
      setSelectedCity(res.data.city)
      setSelectedTemperatureUnit(res.data.unit)
    })
  }, [])

  const InputCity = () => {
    return(
      <div>
        <label htmlFor="title">{GeneralConst.INPUT_CITY_TITLE}</label><br />
        <select
          value={selectedCity}
          onChange={e => setSelectedCity(e.target.value)}
        >
          <option value="BANDUNG">Bandung</option>
          <option value="JAKARTA">Jakarta</option>
          <option value="LONDON">London</option>
          <option value="LOS_ANGELES">Los Angeles</option>
          <option value="PERUGIA">Perugia</option>
          <option value="ROME">Rome</option>
          <option value="SURABAYA">Surabaya</option>
        </select>
      </div>
    )
  }

  const InputTemperatureUnit = () => {
    return(
      <div className="temperature-input-wrapper">
        <label htmlFor="title">{GeneralConst.INPUT_TEMPERATURE_TITLE}</label><br />
        <select
          value={selectedTemperatureUnit}
          onChange={e => setSelectedTemperatureUnit(e.target.value)}
        >
          <option value="CELCIUS">&deg; C Celcius</option>
          <option value="FAHRENHEIT">&deg; F Fahrenheit</option>
        </select>
      </div>
    )
  }

  const submitData = async() => {
    axios({
      method: 'post',
      url: UrlConst.GETSETTING,
      data: {
        city: selectedCity,
        unit: selectedTemperatureUnit
      },
      headers: {'Authorization': "Token " + cookies['token']},
    })
  }

  return(
    <>    
      <Navbar
        activeNavBar={GeneralConst.SETTINGS}
      />
      <div>
        <div className="title-setting">{GeneralConst.SETTINGS}</div>
        <div className="setting-container">
          <InputCity />
          <InputTemperatureUnit />
          {/* <InputIsDarkMode /> */}
          <button
            className="btn-save-setting"
              onClick={() => submitData()}
            >
              {GeneralConst.INPUT_SAVE}
            </button>
        </div>
      </div>      
    </>
  )
}

export default Setting