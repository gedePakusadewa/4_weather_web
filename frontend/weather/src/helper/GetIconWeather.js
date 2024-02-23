import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import AirConditionConst from "../resource/AirCondition.js";

export const GetIconWeather = ({condition, iconURL}) => {
  return(
    <>
      <img 
        className="img-main"
        src={iconURL}
      />
      <div className='main-icon-desc'>{condition}</div>
    </>
  )
};
  
export const GetIconAirCondition = ({condition, value}) => {
  const [icon, setIcon] = useState("")
  const [description, setDescription] = useState("")
  const [unit, setUnit] = useState("")

  useEffect(()=>{
    if(condition == AirConditionConst.UV_INDEX){
      setIcon(<FontAwesomeIcon icon="fa-solid fa-person-rays" />)
      setDescription(AirConditionConst.UV_INDEX_DESC)
    }else if(condition == AirConditionConst.WIND_SPEED){
      setIcon(<FontAwesomeIcon icon="fa-solid fa-wind" />)
      setDescription(AirConditionConst.WIND_SPEED_DESC)
      setUnit("km/h")
    }else if(condition == AirConditionConst.HUMIDITY){
      setIcon(<FontAwesomeIcon icon="fa-solid fa-water" />)
      setDescription(AirConditionConst.HUMIDITY_DESC)
    }
  }, [])

  return(
    <div>
      <div className='air-condition-icon-desc'>{icon} {description}</div>
      <div className='air-condition-value'>{value} {unit}</div>
    </div>
  )
};

export const GetIconTodayWeather = ({hour, iconURL, degree}) => {
  return(
    <div className='card-today-forecast'>
      <div className='today-forecast-hour'>{hour}:00</div>
      <img 
        className="img-next-7-days"
        src={iconURL}
      />
      <div className='today-forecast-degree'>{degree}&deg;C</div>
    </div>
  )
}

export const GetIconNextDaysWeather = ({data}) => {
  if(data === null){
    return
  }

  const getDay = (date) => {
    const d = new Date(date);
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return days[d.getDay()];
  }

  // console.log(data)
  const temp = [
    {
      "time": "2024-02-24 11:00",
      "condition" : {
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "text": "Patchy rain nearby"
      },
      "temp_c": "31"
    },
    {
      "time": "2024-02-24 11:00",
      "condition" : {
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "text": "Patchy rain nearby"
      },
      "temp_c": "31"
    },
    {
      "time": "2024-02-24 11:00",
      "condition" : {
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "text": "Patchy rain nearby"
      },
      "temp_c": "31"
    },
    {
      "time": "2024-02-24 11:00",
      "condition" : {
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "text": "Patchy rain nearby"
      },
      "temp_c": "31"
    },
    {
      "time": "2024-02-24 11:00",
      "condition" : {
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "text": "Patchy rain nearby"
      },
      "temp_c": "31"
    },
    {
      "time": "2024-02-24 11:00",
      "condition" : {
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "text": "Patchy rain nearby"
      },
      "temp_c": "31"
    },
    {
      "time": "2024-02-24 11:00",
      "condition" : {
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "text": "Patchy rain nearby"
      },
      "temp_c": "31"
    }
  ]
  return(
    <>
      {data.map(item => 
        <div className='forecast-card'>
          <div className='forecast-card-time'>
            {getDay(item.time)}<br />
            {item.condition.text}
          </div>
          <div>
            <img 
              className="img-next-7-days"
              src={item.condition.icon}
            />
          </div>
          <div className='forecast-card-temp'>{item.temp_c} &deg;C</div>                
        </div>
      )}
    </>
  )
}