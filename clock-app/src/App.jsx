import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BreakTimer from './BreakTimer.jsx'
import SessionTimer from './SessionTimer.jsx'
import TimerDisplay from './TimerDisply.jsx'
import Controls from './Controls.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper-container'>
      <h1 className='title'>25 + 5 Clock</h1>
      <div className='timers-container'>
        <BreakTimer />
        <SessionTimer />
      </div>
        <TimerDisplay />
        <Controls />
    </div>
  )
}

export default App
