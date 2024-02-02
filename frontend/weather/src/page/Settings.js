import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js"
import { InputCity, InputTemperatureUnit, InputIsDarkMode } from "../component/Input.js";
import "../style.css";

const Setting = () =>{
  return(
    <>    
      <Navbar />
      <div className="title-container">
        <h1>{GeneralConst.SETTINGS}</h1>
      </div>
      <InputCity />
      <InputTemperatureUnit />
      <InputIsDarkMode />
    </>
  )
}

export default Setting