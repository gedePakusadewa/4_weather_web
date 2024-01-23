import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js"

const About = () =>{
  return(
    <>
      <Navbar />
      <div className="title-container">
        <h1>{GeneralConst.ABOUT}</h1>
      </div>
    </>
  )
}

export default About