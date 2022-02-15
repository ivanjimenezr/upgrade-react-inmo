import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.scss'

export const NavBar = ({ user, logoutUser}) => {
    console.log('userNav: ',user)
  return (
      <>
        
        <div className="main-content">
          <nav className="long">
            <div className="first-menu">
              <img src='https://inmobiliaria-bootcamp-front.herokuapp.com/assets/avap_corto.png' alt='Avap'/>
              <Link to="/">
                Home
              </Link>
            </div>

            <div className="last-menu">
              {user ?
              <>
              <span>
                Hello {user}! <button onClick={() => logoutUser()}>Logout</button>
              </span>
              <Link to="/pisos">Pisos</Link>
              </>
              :
              <>
              <Link to="/login"> Login </Link>
              <Link to="/register"> Register </Link>
              
              </>
              }

            
            </div>
          </nav>

          <nav className="burger">

          <img src='https://inmobiliaria-bootcamp-front.herokuapp.com/assets/avap_corto.png' alt='Avap'/>
            <div className="menuBurger">
              <input type="checkbox" id="menu"/>
                <label for="menu">  ☰  </label>
                <ul>
            
            <li><Link to="/">Home</Link></li>
            
            {user ?
              <>
              <li>Hello {user}! <button onClick={() => logoutUser()}>Logout</button></li>
              <li><Link to="/pisos">Pisos</Link></li>
              
              </>
              :
              <>
              <li><Link to="/login"> Login </Link></li>
              <li><Link to="/register"> Register </Link></li>
              
              </>
              }
        </ul>
        </div>
   
    
          </nav>

          
          
        </div>
      
    
    </>
  )
}
