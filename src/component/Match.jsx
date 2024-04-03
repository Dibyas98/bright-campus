import React, { useContext } from 'react'
import { data } from './Context'

export default function Match() {
    const{display}= useContext(data)
  return (
    <div className='match'>
      {display?<h1>Match</h1>:<h1>Not match</h1>}
    </div>
  )
}
