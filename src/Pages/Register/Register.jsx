import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
};

const Register = (props) => {
    const [state, setState] = useState(INITIAL_STATE);
    let navigate = useNavigate();
    const submitForm = (ev) => {
       
        var url = 'https://inmobiliaria-bootcamp.herokuapp.com/usuario/register';
        var data = state;
        
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
        navigate("/");
        console.log(state)
        
    };

    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setState({...state, [name]: value});
        
    };
    return (
      
        <form onSubmit={submitForm}>
            <fieldset>
                <label>
                    <p>Nombre</p>
                    <input type="text" name="name" value={state.name} onChange={handleInput} required />
                </label>

                <label>
                    <p>Email</p>
                    <input type="email" name="email" value={state.email} onChange={handleInput} required />
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" name="password" value={state.password} onChange={handleInput} required />
                </label>


                <div>
                    <button type="submit">Guardar Perfil</button>
                </div>
            </fieldset>
        </form>
    )
};

export default Register;