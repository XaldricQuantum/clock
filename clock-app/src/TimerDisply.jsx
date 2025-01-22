

function TimerDisplay ({sessionType, timeLeft}) {

    const formatTimer = (seconds) => {
        const mins = Math.floor(seconds / 60);
        console.log(timeLeft);
        
        const secs = Math.floor(seconds % 60);
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    };

    return (
        <div className='timer-display'>
            <h2 className='current-timmer' id='timer-label'>{sessionType}</h2>
            <p className='timer-left' id='time-left'>{formatTimer(timeLeft)}</p>
        </div>
    )
}

export default TimerDisplay