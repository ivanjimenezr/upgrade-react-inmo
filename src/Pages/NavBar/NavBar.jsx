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

          <nav class="burger">

          <img src='https://inmobiliaria-bootcamp-front.herokuapp.com/assets/avap_corto.png' alt='Avap'/>
            <div className="menuBurger">
              <input type="checkbox" id="menu"/>
                <label for="menu">  ☰  </label>
                <ul>
            
            <li>ww</li>
            <li>ww</li>
            <li>sss</li>
        </ul>
        </div>
   
    
          </nav>

          
          
        </div>
      
    
    </>
  )
}
