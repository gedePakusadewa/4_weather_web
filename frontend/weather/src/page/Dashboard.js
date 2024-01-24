import { useState, useEffect } from "react";
import GeneralConst from "../resource/General.js";
import UrlConst from "../resource/Url.js"
import axios from "axios";
import "../style.css";

const Dashboard = () => {
  const [city, setCity] = useState("")
  const [temp, setTemp] = useState("")
  const [condition, setCondition] = useState("")

  useEffect(() => {
    getWeatherData("New York")
  }, [])
  
  const getWeatherData = async (location) => {      
    axios({
      method: 'get',
      url: UrlConst.GETWEATHER,
      params: {
        location: location
      },
      headers: {'Authorization': "Token " + "3d0adf1672d2a823194b0ef42daa5bef49776df6"},
    }).then((res) => {
      setCity(res.data.location.name)
      setTemp(res.data.current.temp_c)
      setCondition(res.data.current.condition.text)
    })
  };

  return(
    <div className="main-container">
      <div className="today-container">
        <p>{city}</p><br />
        <p>{temp} C</p><br />
        <p>{condition}</p><br />
      </div>
      <div className="forecast-container">

      </div>
    </div>
  )
}

export default Dashboard