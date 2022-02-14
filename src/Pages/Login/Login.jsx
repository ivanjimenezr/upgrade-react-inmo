
import React,{ useState } from 'react'
import { useLocation } from "react-router-dom";


const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = (props) => {
  const { state } = useLocation();
  const [formData, setFormData] = useState(INITIAL_STATE);
  
  const submitForm = (ev) => {
    ev.preventDefault();
    props.loginUser(formData, state ? state.prevRoute : null);
    console.log('formData: ',formData)
    setFormData(INITIAL_STATE);
  }

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    setFormData({ ...formData, [name]: value });
    
  };
    
  
  return (
    <form onSubmit={submitForm}>
    <label>
        <p>Email</p>
        <input type="text" name="email" onChange={changeInput} value={formData.email} />
      </label>

      <label>
        <p>Contraseña</p>
        <input type="password" name="password" onChange={changeInput} value={formData.password} />
      </label>

      <div>
        <button type='submit'>Log In</button>
      </div>

      {props.loginError && <div style={{color: 'red'}}>{props.loginError}</div>}
    </form>
    
  )
}


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser, useAuthState, useAuthDispatch } from "../../Context";
// import styles from "./login.module.css";

// function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useAuthDispatch();
//   let navigate = useNavigate();
//   const { loading, errorMessage } = useAuthState(); //lee los valores del loading y errorMessages del contexto

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       let response = await loginUser(dispatch, { email, password });
//       if (!response.user) return;
//       navigate("/dashboard");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={{ width: 200 }}>
//         <h1>Login Page</h1>
//         {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
//         <form>
//           <div className={styles.loginForm}>
//             <div className={styles.loginFormItem}>
//               <label htmlFor="email">Username</label>
//               <input
//                 type="text"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 disabled={loading}
//               />
//             </div>
//             <div className={styles.loginFormItem}>
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 disabled={loading}
//               />
//             </div>
//           </div>
//           <button onClick={handleLogin} disabled={loading}>
//             login
//           </button>
          
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;