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
    currentSession: "main",
    currentTime: 1500
  })

  return (
    <div className='wrapper-container'>
      <h1 className='title'>25 + 5 Clock</h1>
      <div className='timers-container'>
        <BreakTimer state={state} setState={setState}/>
        <SessionTimer state={state} setState={setState}/>
      </div>
        <TimerDisplay state={state} setState={setState}/>
        <Controls state={state} setState={setState}/>
    </div>
  )
}

export default App
