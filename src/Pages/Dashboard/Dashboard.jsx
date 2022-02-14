import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Dashboard.scss'

export const Dashboard = () => {
	const BASEURL = "https://inmobiliaria-bootcamp.herokuapp.com";
	const ITEMSURL = "/pisos";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(BASEURL+ITEMSURL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.pisos);
          // console.log(items)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      
      <>
      {/* {console.log(items)} */}
        {items.map(item => (
          
          <div className='mainAd' key={item._id}>
          
            <p>{item.titular}</p>
            <p>{item.precio}</p>
            <p><Link to={`/detail/${item._id}`} alt={item.titular}><img src={item.imagen} title={item.titular} alt={item.titular} /></Link></p>
            
            <Link to={`/detail/${item._id}`} title={item.titular} alt={item.titular}>Más detalles</Link>
            
          </div>
        ))}
      </>
    );
  }
}