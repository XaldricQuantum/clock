
function Controls (props) {

    const handlePlayPause = (event) => {
        console.log("PlayPause");
        
    }

    const handleReset = (event) => {
        console.log("Reset");
        
    }

    return (
        <div className='controls'>
            <button className='btn' id='start_stop' onClick={handlePlayPause}><i class="fa fa-play fa-2x"></i>/<i class="fa fa-pause fa-2x"></i></button>
            <button className='btn' id='reset' onClick={handleReset}><i class="fa fa-refresh fa-2x"></i></button> 
        </div>
    )
}

export default Controls