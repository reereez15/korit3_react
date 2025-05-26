import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [ weather, setWeather ] = useState({
    temp: '', 
    desc: '', 
    icon: ''
  });

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&units=Meric&APIkey=a8620cf3cb7e1a978320434f79cc3b40')
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon
      });
    })
    .catch(error => console.error(error));
  }, []);

if (weather.icon) {
  return (
    <>
      <p>온도 : {weather.temp}</p>
      <p>설명 : {weather.description}</p>
      <p>아이콘 : {weather.icon}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
      alt="날씨아이콘입니다."/>
    </>
  )
}else {
  return (
    <h1>로딩 중 ...</h1>
  )
}
}

export default App
