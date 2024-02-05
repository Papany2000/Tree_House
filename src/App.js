import React, { useEffect } from 'react'
import './App.css';
import { CreateDate } from './Component/time';
import DateTime from './Component/dateTime';
const tg = window.Telegram.WebApp

function App() { 

  const [date, setDate] = React.useState(CreateDate())
  useEffect(() => {
    tg.ready()
  }, [])
const onClose = () => {
  tg.close()
}

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(CreateDate())
    }, 1000);
    
    // очистка интервала
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={'text-center m-5 h-96'}>
      <DateTime date={date}/>
      <button onClick={onClose}>закрыть</button>
      <h1>Для решения задач </h1>
     <p style={{color: 'red', fontSize: 34}}>Привет дорогой товарищь Ким 🌖 🚗</p>
    </div>
  )
}

export default App;
