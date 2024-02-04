import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js";
import axios from "axios";
import UrlConst from "../resource/Url.js";
import { InputIsDarkMode } from "../component/Input.js";
import { useEffect, useState } from "react";
import "../style.css";

const Setting = () =>{
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState("")

  useEffect(() => {
    axios({
      method: 'get',
      url: UrlConst.GETSETTING,
      headers: {'Authorization': "Token " + "3d0adf1672d2a823194b0ef42daa5bef49776df6"},
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
          <option value="LONDON">London</option>
          <option value="JAKARTA">Jakarta</option>
        </select>
      </div>
    )
  }

  const InputTemperatureUnit = () => {
    return(
      <form>
        <label htmlFor="title">{GeneralConst.INPUT_TEMPERATURE_TITLE}</label><br />
        <select
          value={selectedTemperatureUnit}
          onChange={e => setSelectedTemperatureUnit(e.target.value)}
        >
          <option value="CELCIUS">Celcius</option>
          <option value="FAHRENHEIT">Fahrenheit</option>
        </select>
      </form>
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
      headers: {'Authorization': "Token " + "3d0adf1672d2a823194b0ef42daa5bef49776df6"},
    })
  }

  return(
    <>    
      <Navbar />
      <div className="title-container">
        <h1>{GeneralConst.SETTINGS}</h1>
      </div>
      <InputCity />
      <InputTemperatureUnit />
      <InputIsDarkMode />
      <div>
        <button
          onClick={() => submitData() }
        >
          {GeneralConst.INPUT_SAVE}
        </button>
      </div>
    </>
  )
}

export default Setting