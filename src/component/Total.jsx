import React, { useContext } from 'react'
import { data } from './Context'
import { Ban, Banana } from 'lucide-react';

export default function Total() {
    const {total,setclick,playagain} = useContext(data)
  return (
    <div className='match' style={{display:"flex",flexDirection:'column'}}>
        <div style={{display:"flex",alignItems:'center',color:'red'}}><Banana style={{fill:'yellow'}}></Banana>: <h1>{total}</h1></div>
        <button onClick={()=> playagain()} style={{width:"100px",height:'30px'}}>Play Again</button>
    </div>
  )
}
