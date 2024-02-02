import { useState, useEffect } from "react";
import AirConditionConst from "../resource/AirCondition.js";
import {
  GetIconWeather,
  GetIconAirCondition,
  GetIconTodayWeather,
  GetIconNextDaysWeather
} from '../helper/GetIconWeather.js';
import UrlConst from "../resource/Url.js"
import axios from "axios";
import "../style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Dashboard = () => {
  const [city, setCity] = useState("")
  const [temp, setTemp] = useState("")
  const [condition, setCondition] = useState("")
  const [uvIndex, setUvIndex] = useState("")
  const [windSpeed, setWindSpeed] = useState("")
  const [humidity, setHumidity] = useState("")
  const [todayForecast, setTodayForecast] = useState(null)
  const [current6hourForecast, setCurrent6hourForecast] = useState(null)
  const [currentLocalTime, setCurrentLocalTime] = useState("")
  const [next7DaysForecast, setNext7DaysForecast] = useState(null)
  const [currentNext7DaysForecast, setCurrentNext7DaysForecast] = useState(null)

  useEffect(() => {
    getWeatherData("jakarta")
  }, [])

  useEffect(() => {
    setCurrent6hourForecast(getCurrentForecast(currentLocalTime, todayForecast))

    setCurrentNext7DaysForecast(getNextDaysForecast(currentLocalTime, next7DaysForecast))

  }, [todayForecast])
  
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
      setUvIndex(res.data.current.uv)
      setWindSpeed(res.data.current.wind_mph)
      setHumidity(res.data.current.humidity)
      setTodayForecast(res.data.forecast.forecastday[0].hour)
      setCurrentLocalTime(res.data.location.localtime)

      setNext7DaysForecast(res.data.forecast.forecastday)
    })
  };
  
  // get 6 hour ahead
  const getCurrentForecast = (currentLocalTime, hour24Data) => {
    if(hour24Data !== null){
      const temp = [];
      let currentLocalTimeHour = currentLocalTime.slice(11, 13);
      let tempHour = parseInt(currentLocalTimeHour) + 5;
      let incre = 0;

      hour24Data.map((data, idx) => {
        if (idx >= currentLocalTimeHour && idx < tempHour){
          data.hour = idx
          temp[incre] = data
          incre++
        }
      })

      return temp
    }

    return null
  }

  // geyt 7 days ahead in exact time when get api
  const getNextDaysForecast = (currentLocalTime, nextDaysData) => {
    if(nextDaysData !== null){
      const temp = [];
      let currentLocalTimeHour = parseInt(currentLocalTime.slice(11, 13));
      let currentDate = new Date(currentLocalTime.slice(0, 11))
      let incre = 0;
      
      nextDaysData.map((data, idx) => {
        let tempNextDate = new Date(data.date)
        if(tempNextDate.setHours(0,0,0,0) > currentDate.setHours(0,0,0,0)){
          data.hour.map((item, idx2) => {
            if(idx2 === currentLocalTimeHour){
              item.hour = idx2
              temp[incre] = item
              incre++
            }
          })
        }
      })

      return temp
    }

    return null

  }

  return(
    <div className="main-container">
      <div className="today-container">
        <div className="curr-weather-container">
          <div>
            <span>{city}</span><br />
            <span>{temp} &deg;C</span>
          </div>
          <div>
          <img 
            className="img-test"
            src={"https://cdn.weatherapi.com/weather/64x64/day/116.png"}
          />
            <GetIconWeather condition={condition}/>
          </div>
        </div>
        <div>
          <h1>Today forecast (&deg;C)</h1>
          <div className="wrap-content-today-forecast">
            {current6hourForecast !== null && (current6hourForecast.map(data => {
                return(
                  <GetIconTodayWeather 
                    hour={data.hour}
                    condition={data.condition.text}
                    degree={data.temp_c}
                  />
                )      
              })
            )}
          </div>
        </div>
        <div>
          <h1>Air Conditions</h1>
          <div className="wrap-content-air-conditions">
            <div>
              <GetIconAirCondition
                condition={AirConditionConst.UV_INDEX}
                value={uvIndex}
              />
              <GetIconAirCondition
                condition={AirConditionConst.WIND_SPEED}
                value={windSpeed}
              />
            </div>
            <div>
              <GetIconAirCondition
                condition={AirConditionConst.HUMIDITY}
                value={humidity}
              />
            </div>
          </div>          
        </div>
      </div>
      <div className="forecast-container">
        <div>
          Next Day Forecast
          <GetIconNextDaysWeather 
            data={currentNext7DaysForecast}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard