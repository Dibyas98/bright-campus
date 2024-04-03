import React, { useContext } from 'react'
import { data } from './Context'

export default function TryAgain({trya}) {
    const {handleStart} =useContext(data)
  return (
    <div className='match'>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1rem'}}>
        <h1 style={{fontSize:'3rem'}}>Try Again</h1>
        <button style={{width:'100px',height:'30px'}} onClick={()=> window.location.reload()}>Start</button>
        </div>
    </div>
  )
}
