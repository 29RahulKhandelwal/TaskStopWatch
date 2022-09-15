import React from 'react'
import Button from './components/Button'
import ShowWatch from './components/ShowWatch'
import "./App.css"
import { useState } from 'react'

const App = () => {
  const [time,setTime]=useState({ms:0,s:0,m:0,h:0})
  const [interv,setInterv]=useState();
  const [status,setStatus]=useState(0);

  const start=()=>{
    run();
    setStatus(1)
    setInterv(setInterval(run,10));
  }

  var updatedMs=time.ms, updatedS=time.s, updatedM=time.m, updatedH=time.h;
  const run=()=>{
    if(updatedM===60){
      updatedH++;
      updatedM=0
    }
    if(updatedS===60){
      updatedM++;
      updatedS=0;
    }
    if(updatedMs===100){
      updatedS++;
      updatedMs=0;
    }
    updatedMs++;
    return setTime({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH});
  }

  const stop=()=>{
    clearInterval(interv);
    setStatus(2)
  }
  const reset=()=>{
    clearInterval(interv);
    setStatus(0)
    setTime({ms:0,s:0,m:0,h:0})
  }
  const resume=()=>{
    start();
  }

  return (
    <div className='main-section'>
      <div className="clock-holder">
        <div className="stopwatch">
          <ShowWatch time={time} />
          <Button start={start} stop={stop} status={status} reset={reset} resume={resume} />
        </div>
      </div>

    </div>
  )
}

export default App