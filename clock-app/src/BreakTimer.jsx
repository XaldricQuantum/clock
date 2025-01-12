

function BreakTimer () {

return (
    <div className='break-timer'>
          <h2 className='lable' id='break-label'>Break Length</h2>
          <div className='brake-controls'>
            <button className='btn' id='break-decrement'><i class="fa fa-arrow-up fa-2x"></i></button>
            <p className='timer' id='break-length'>5</p>
            <button className='btn' id='break-increment'><i class="fa fa-arrow-down fa-2x"></i></button>
          </div>
    </div> 
)
}

export default BreakTimer