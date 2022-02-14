import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";


export const Detail = (props) => {
    const BASEURL = "https://inmobiliaria-bootcamp.herokuapp.com/pisos/";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [piso, setPiso] = useState({});
    let { idUser } = useParams();
    console.log('pisoId: ',idUser)

    useEffect(() => {
        fetch(BASEURL + idUser)
          .then(res => res.json())
          .then(
            (response) => {
              setIsLoaded(true);
              setPiso(response.data.pisos);

            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [idUser]);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
          {console.log('piso: ', piso.titular)}
            <p>{piso.titular}</p>
            <p><img src={piso.imagen} alt={piso.titular} /></p>
            <p>Tipo de vivienda: {piso.tipo}</p>
            <p>{piso.direccion}</p>
            <p>Precio: {piso.precio} - Superficie: {piso.superficie}m²</p>
            <p><Link to='/dashboard/'>Volver al listado</Link></p>
          </div>
        );
      }
    }
