

function TimerDisplay (props) {

    const formatTimer = (seconds) => {
        const mins = Math.floor(seconds / 3600);
        console.log(props.state.currentTime);
        
        console.log(mins);
        
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs}`
    };

    return (
        <div className='timer-display'>
            <h2 className='current-timmer' id='timer-label'>{props.state.currentSession === "main" ? "Session" : "Break" }</h2>
            <p className='timer-left' id='time-left'>{formatTimer(props.state.currentTime)}</p>
        </div>
    )
}

export default TimerDisplay