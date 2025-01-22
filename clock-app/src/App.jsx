import { useState, useEffect } from 'react'
import './App.css'
import BreakTimer from './BreakTimer.jsx'
import SessionTimer from './SessionTimer.jsx'
import TimerDisplay from './TimerDisply.jsx'
import Controls from './Controls.jsx'

function App() {
  const [state, setState] = useState({
    break: 5,
    session: 25,
    isRunning: false,
    isBreak: false,
    currentTime: 1500
  })

  const alarm = document.getElementById('beep');
  // console.log(alarm);
  

  useEffect(() => {
    let timer;

    const runTimer = () => {
      timer = setTimeout(() => {
      setState((prevState) => {
        if (prevState.currentTime > 0) {
          return {...prevState, currentTime: prevState.currentTime -1}
        } else {
          const isBreakeState = !prevState.isBreak;
          return {
            ...prevState,
            isBreak: isBreakeState,
            currentTime: isBreakeState ? prevState.break * 60 : prevState.session * 60,
          };
        };
      })},1000);
    };

    if (state.isRunning) {
      runTimer()
    }

    //cleanup when timer is not running or component unmount
    return () => clearTimeout(timer);
  }, [state.isRunning, state.currentTime]);

  useEffect(() => {
    if (state.currentTime < 5 && state.isRunning) {
      alarm.play();
    }
  }, [state.currentTime])

  return (
    <div className='wrapper-container'>
      <h1 className='title'>25 + 5 Clock</h1>
      <div className='timers-container'>
        <BreakTimer state={state} setState={setState}/>
        <SessionTimer state={state} setState={setState}/>
      </div>
        <TimerDisplay sessionType={state.isBreak ? "Break" : "Session"} timeLeft={state.currentTime}/>
        <Controls state={state} setState={setState} alarm={alarm}/>
       

    </div>
  )
}

export default App
