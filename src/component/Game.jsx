import React, { useContext } from 'react'
import Card from './Card'
import { nanoid } from 'nanoid'
import { data } from './Context'

export default function Game(props) {
  return (
    <div className='game' >
      {
        props.list.map((ele) =>{
            return <div key={nanoid()} style={{width:'30%',height:'150px',display:'flex',justifyContent:'center'}}><Card data={ele} call = {props.func} col={props.col}></Card></div>
        })
      }
    </div>
  )
}
