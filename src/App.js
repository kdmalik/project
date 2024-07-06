import React, { useState, useEffect } from 'react';
import './App.css';
import { Mobileview } from './component/Mobileview';
import { Desktopview } from './component/Desktopview';
import { isMobile } from 'react-device-detect';
function App() {
  const [timeLeft, setTimeLeft] = useState(3 * 60); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      alert('Session expired Please Refresh the page and try again');
    }
  }, [timeLeft]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  };
  return (
    <div className='App'>

      <h1>Time left: {formatTime(timeLeft)}</h1>
      {isMobile ? <Mobileview /> : <Desktopview />}
    </div>
  )
}

export default App;
