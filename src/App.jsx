import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate  } from "react-router-dom";
// import { getToken } from './Config/Common'
import './App.scss'
// import { PrivateRoute } from "./Config/PrivateRoute";
// import { PublicRoute } from "./Config/PublicRoute";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Home } from "./Pages/Home/Home";
import { LoginForm } from "./Pages/Login/Login";
import { NavBar } from "./Pages/NavBar/NavBar";
import Register from "./Pages/Register/Register";
import { setUserSession, removeUserSession } from './Config/Common';
import axios from 'axios'
import { Detail } from "./Pages/Detail/Detail";
// import AppRoutes from "./Components/AppRoutes";
// import routes from "./Config/routes.js";
// import { AuthProvider } from "./Context";




function App() {
  // const navigate = useNavigate();
  const [token, setToken] = useState(null)
  const [loginError, setLoginError] = useState('');
  const [user, setUser] = useState('')
  
  

  const loginUser = (formData, prevRoute) => {

    console.log('formData.email:', formData.email)
    console.log('formData.pwd:', formData.password)
    const exitsPiso = axios.post("https://inmobiliaria-bootcamp.herokuapp.com/usuario/authenticate", {
      email: formData.email,
      password: formData.password})
      .then(response =>{
        setUser(response.data.user.name)
        setUserSession(response.data.token,response.data.user.email,response.data.user.name)
        
        console.log('response >> ', response);
        console.log('status >> ', response.status);
        Navigate("/dashboard");
        
      })
      .catch(error => {
        console.log('error: ',error)
        if (error.response.status === 401 || error.response.status === 400){
          setLoginError(error.response.data.statusText)
        }
        else{
          setLoginError('Something went  wrong, please try again later')
      }
      console.log('error >> ', error)
    })
    
    
  }
  
  const logoutUser = () => {
    setUser(null);
    removeUserSession()
  };

  

  return (
    <div className="App">
<Router>
<NavBar user={user} logoutUser={logoutUser} />

  <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login"element={<LoginForm loginUser={loginUser} loginError={loginError} />}/>
          
          <Route path="/detail/:idUser" element={<Detail />}/>
          

          <Route path="/dashboard" element={
            // <PrivateRoute>
              <Dashboard />
            // </PrivateRoute>
          }
        />
          <Route path="/register" element={
            // <PublicRoute>
              <Register />
            // </PublicRoute>
          }/>
        </Routes>
</Router>

      
    </div> 


    
  );
}

export default App;