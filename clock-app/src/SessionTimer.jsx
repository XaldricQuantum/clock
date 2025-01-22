

function SessionTimer (props) {

  const incSession = (event) => {
    if (!props.state.isRunning && props.state.session < 60) {
      console.log(`incSession: ${props.state.session}`);
      
      props.setState((prevState) => ({...prevState, session: prevState.session + 1}));
      updateTimer(true)
    }
  };

  const decSession = (event) => {
    if (!props.state.isRunning && props.state.session > 1) {
      console.log(`decSession: ${props.state.session}`);
      
      props.setState((prevState) => ({...prevState, session: prevState.session - 1}));
      updateTimer(false)
    }
  };

  const updateTimer = (isUp) => {
    if (!props.state.isBreak) {
      if (isUp) {
        props.setState((prevState) => ({...prevState, currentTime: prevState.currentTime + 60}))
      }else {
        props.setState((prevState) => ({...prevState, currentTime: prevState.currentTime - 60}))
      }
    }
  }

 

    return (
        <div className='session-timer'>
          <h2 className='lable' id='session-label'>Session Length</h2>
          <div className='session-controls'>
            <button className='btn' id='session-increment' onClick={incSession} ><i className="fa fa-arrow-up fa-2x"></i></button>
            <p className='timer' id='session-length'>{props.state.session}</p>
            <button className='btn' id='session-decrement' onClick={decSession} ><i className="fa fa-arrow-down fa-2x"></i></button>
          </div>
        </div>
    )
}

export default SessionTimer