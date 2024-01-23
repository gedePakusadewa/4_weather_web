import { Link } from "react-router-dom";
import { AuthContext } from "../App.js";
import { useContext } from "react";
import { useCookies } from 'react-cookie';
import GeneralConst from "../resource/General.js"
import "../style.css";

function Navbar() {
  const context = useContext(AuthContext);
  const [cookies, setCookie] = useCookies(['user']);

  return(
    <div className="container-navbar">
      <div>
        <nav>
          <Link to="/">
            <button 
              className="btn btn-navbar"
            >
              {GeneralConst.HOME}
            </button>
          </Link>
          <Link to="/about">
          <button 
              className="btn btn-navbar"
            >
              {GeneralConst.ABOUT}
            </button>
          </Link>
          {cookies['token'] !== undefined && (
            <button
              className="btn btn-navbar-logout"
              onClick={()=>context.handleLogout(cookies['token'])}
            >
              {GeneralConst.LOGOUT}
            </button>
          )}
        </nav>
      </div>
    </div>
  )
};

export default Navbar;