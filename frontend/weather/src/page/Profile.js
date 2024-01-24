import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js"
import "../style.css";

const Profile = () =>{
  return(
    <>
      <Navbar />
      <div className="title-container">
        <h1>{GeneralConst.PROFILE}</h1>
      </div>
    </>
  )
}

export default Profile