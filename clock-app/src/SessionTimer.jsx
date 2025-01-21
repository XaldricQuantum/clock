

function SessionTimer (props) {

    return (
        <div className='session-timer'>
          <h2 className='lable' id='session-label'>Session Length</h2>
          <div className='session-controls'>
            <button className='btn' id='session-decrement'><i class="fa fa-arrow-up fa-2x"></i></button>
            <p className='timer' id='session-length'>{props.state.session}</p>
            <button className='btn' id='session-increment'><i class="fa fa-arrow-down fa-2x"></i></button>
          </div>
        </div>
    )
}

export default SessionTimer