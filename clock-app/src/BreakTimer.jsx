

function BreakTimer (props) {

  const incBreak = (event) => {
    if (!props.state.isRunning && props.state.break < 60) {
      props.setState((prevState) => ({...prevState, break: prevState.break + 1}));
      updateTimer(true);
    }
  };

  const decBreak = (event) => {
    if (!props.state.isRunning && props.state.break > 1) {
      props.setState((prevState) => ({...prevState, break: prevState.break - 1}));
      updateTimer(false);
    }
  };

  const updateTimer = (isUp) => {
    if (props.state.isBreak) {
      if (isUp) {
        props.setState((prevState) => ({...prevState, currentTime: prevState.currentTime + 60}))
      }else {
        props.setState((prevState) => ({...prevState, currentTime: prevState.currentTime - 60}))
      }
    }
  }

return (
    <div className='break-timer'>
          <h2 className='lable' id='break-label'>Break Length</h2>
          <div className='brake-controls'>
            <button className='btn' id='break-increment' onClick={incBreak} ><i className="fa fa-arrow-up fa-2x"></i></button>
            <p className='timer' id='break-length'>{props.state.break}</p>
            <button className='btn' id='break-decrement' onClick={decBreak}><i className="fa fa-arrow-down fa-2x"></i></button>
          </div>
    </div> 
)
}

export default BreakTimer