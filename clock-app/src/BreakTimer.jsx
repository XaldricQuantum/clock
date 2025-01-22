

function BreakTimer (props) {

  const incBreak = (event) => {
    props.setState((prevState) => ({...prevState, break: prevState.break + 1}));
  };

  const decBreak = (event) => {
    props.setState((prevState) => ({...prevState, break: prevState.break - 1}));
  };

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