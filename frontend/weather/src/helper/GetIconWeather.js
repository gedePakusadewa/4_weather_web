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
      <p>{condition}</p>
    </>
  )
};
  
export const GetIconAirCondition = ({condition, value}) => {
  const [icon, setIcon] = useState("")

  useEffect(()=>{
    if(condition == AirConditionConst.UV_INDEX){
      setIcon(<FontAwesomeIcon icon="fa-solid fa-person-rays" />)            
    }else if(condition == AirConditionConst.WIND_SPEED){
      setIcon(<FontAwesomeIcon icon="fa-solid fa-wind" />)
    }else if(condition == AirConditionConst.HUMIDITY){
      setIcon(<FontAwesomeIcon icon="fa-solid fa-water" />)
    }
  }, [])

  return(
    <>
      {icon}
      {value}
    </>
  )
};

export const GetIconTodayWeather = ({hour, iconURL, degree}) => {
  return(
    <div>
      <div>{hour}</div>
      <img 
        className="img-next-7-days"
        src={iconURL}
      />
      <div>{degree}</div>
    </div>
  )
}

export const GetIconNextDaysWeather = ({data}) => {
  if(data === null){
    return
  }

  return(
    <>
      {data.map(item => 
        <div>
          <div>{item.time}</div>
          <img 
            className="img-next-7-days"
            src={item.condition.icon}
          />
          <div>{item.condition.text}</div>
          <div>{item.temp_c} &deg;C</div>                
        </div>
      )}
    </>
  )
}