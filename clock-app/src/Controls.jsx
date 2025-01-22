
function Controls (props) {

    const handlePlayPause = (event) => {
        console.log("PlayPause");
        props.setState((prevState) => ({...prevState, isRunning: !prevState.isRunning}))
        
    }

    const handleReset = (event) => {
        console.log("Reset");
        props.setState({
            break: 5,
            session: 25,
            isRunning: false,
            isBreak: false,
            currentTime: 1500
          });
        
    }

    return (
        <div className='controls'>
            <button className='btn' id='start_stop' onClick={handlePlayPause}>{props.state.isRunning ?  <i className="fa fa-pause fa-2x"></i> : <i className="fa fa-play fa-2x"></i>}</button>
            <button className='btn' id='reset' onClick={handleReset}><i className="fa fa-refresh fa-2x"></i></button> 
        </div>
    )
}

export default Controls