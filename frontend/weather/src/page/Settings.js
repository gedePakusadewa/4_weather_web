import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js"
import "../style.css";

const Setting = () =>{
  return(
    <>
      <Navbar />
      <div className="title-container">
        <h1>{GeneralConst.SETTINGS}</h1>
      </div>
    </>
  )
}

export default Setting