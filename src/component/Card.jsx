import React, { useContext, useEffect, useState } from "react";
import "../assets/css/card.css";
import { data } from "./Context";

export default function Card(props) {
  return (
    <div
      className={`card ${props.data.flip ? '' : 'card-flip'} `}
      style={props.data.active ? { display: "flex" } : { display: "none" }}
      onClick={() => {
        props.call(props.data)
        
          }}
          >
      <div className="card_front" style={{backgroundColor:props.col}}><div className="heart"></div></div>
      <div className="card_back">
        <div style={{backgroundImage:'',display:'flex',alignItems:'center',justifyContent:'center'}}>
          {props.data.photo?<img src={props.data.photo} alt="" />:<h1>{props.data.name.substring(0,1)}</h1>}
        </div>
      </div>
    </div>
  );
}
