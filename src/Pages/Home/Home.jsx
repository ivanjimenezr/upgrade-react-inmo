import React from 'react'
import data from './Data/Data.json'
import dataMini from './Data/Data.json'
import './Home.scss'

export const Home = () => {
  return (
    <>
    <div className="hero-content">
      <img src="https://statics.imghs.net/Images/Home/home-autumn-dk_21.jpg" alt="" />
    </div>
       
    <div className="group-minicards">
    {data.map(item => (
      <div className="group-cards"  key={item.id}>
        <div className="card">
          <img src={item.src} alt={item.descrip} />
          <div className="text">
              <p>{item.descrip}</p>
              <p><a href="/">{item.link}</a></p>
          </div>
        </div>
      </div>
      ))}
        </div>

        <div className="group-minicards">

        {dataMini.map((mini) =>(
          <div className="minicard">
            <div className="picture">
              <img src={mini.src} alt={mini.descrip} />
            </div>
            <div className="text">
              <p className="titular">{mini.titular}</p>
              <p>{mini.descrip}</p>
              <p><a href="pta">{mini.link}</a></p>
            </div>
          </div>)
      )}
    </div>

</>
  )
}
