import Navbar from "../component/NavBar.js";
import GeneralConst from "../resource/General.js"
import "../style.css";

const Home = () =>{
  return(
    <>
      <Navbar />
      <div className="title-container">
        <h1>{GeneralConst.HOME}</h1>
      </div>
    </>
  )
}

export default Home