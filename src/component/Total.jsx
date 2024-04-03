import React, { useContext } from 'react'
import { data } from './Context'

export default function Total() {
    const {total,setclick} = useContext(data)
  return (
    <div className='match'>
        Total Banana: {total}
        <button onClick={()=> setclick(0)}>Play Again</button>
    </div>
  )
}
