//En este NavBar voy a meter lo que tenía en App
import {Link} from "react-router-dom"
import NavAdmin from "./NavAdmin"
import NavUser from "./NavUser"

const NavBar = ({user, logoutUser})=>{

    return(
        <nav>
        <ul className='menu'>
          
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/profile">Usuario</Link></li> */}
          
          {user ? (user.role === "admin" ? <NavAdmin /> : <NavUser/>) : null}

          {/* Debemos valorar si existe un usuario activo
          para valorar si hay Login o Logout */}
          <li>
          {user ? <button onClick={logoutUser}>Logout</button> : <Link to="/login">Login</Link>}
          </li>
          <li><Link to='/check'>Check</Link>

          </li>
        </ul>
      </nav>

    )


}

export default NavBar;