import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = ({ user, logoutUser}) => {
    console.log('userNav: ',user)
  return (
      <>
        <div>NavBar</div>
          <div className="header">

        <Link to="/">
          Home
        </Link>

        {user ?
        <>
        <span>
          Hello {user}! <button onClick={() => logoutUser()}>Logout</button>
        </span>
        <Link to="/dashboard">Dashboard</Link>
        </>
        :
        <>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
        </>
        }

        

        


          {/* <NavLink  activeclassname="active" to="/">Home</NavLink>
            { getToken() ? null
            :
          <>
          <NavLink  activeclassname="active" to="/login">Login <small>Access without token only</small></NavLink>
          <NavLink  activeclassname="active" to="/register">Register <small>Access without token only</small></NavLink>
          </>
          }

          { getToken() ?  <NavLink  activeclassname="active" to="/dashboard">Dashboard <small>Access with token only</small></NavLink>
          :
          null
          } */}

         
          
        </div>
      
    
    </>
  )
}
