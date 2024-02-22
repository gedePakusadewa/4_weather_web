import { Link } from "react-router-dom";
import { AuthContext } from "../App.js";
import { useContext } from "react";
import { useCookies } from 'react-cookie';
import GeneralConst from "../resource/General.js"
import "../style.css";

function Navbar({activeNavBar}) {
  const context = useContext(AuthContext);
  const [cookies, setCookie] = useCookies(['user']);

  return(
    <div className="container-navbar">
      <div>
        <nav>
          <Link to="/">
            <button 
              className={activeNavBar === GeneralConst.DASHBOARD ? "btn btn-active" : "btn"}
            >
              {GeneralConst.DASHBOARD}
            </button>
          </Link>
          <Link to="/settings">
          <button 
              className={activeNavBar === GeneralConst.SETTINGS ? "btn btn-active" : "btn"}
            >
              {GeneralConst.SETTINGS}
            </button>
          </Link>
          <Link to="/profile">
          <button 
             className={activeNavBar === GeneralConst.PROFILE ? "btn btn-active" : "btn"}
            >
              {GeneralConst.PROFILE}
            </button>
          </Link>
          {cookies['token'] !== undefined && (
            <button
              className="btn"
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