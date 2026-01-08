import React from 'react'

export const CardApp = ({elem}) => {
  return (
    <div>
      <p>{elem.dt_txt.split(" ")[0]}</p>
      <p>{elem.main.temp} ºC</p>
      <p>{elem.main.humidity}%</p>
      <img src={`https://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`} alt="" />
    </div>
  )
}