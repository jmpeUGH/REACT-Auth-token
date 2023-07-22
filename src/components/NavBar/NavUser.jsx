import { Link } from "react-router-dom"

const NavUser = () => {
  return (
    
    <>
            <li><Link to="/update">Modificar datos</Link></li>
            <li><Link to="/citas">Citas</Link></li>
    </>
    
  )
}

export default NavUser
