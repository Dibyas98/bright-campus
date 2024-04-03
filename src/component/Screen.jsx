import React, { useContext } from "react";
import Game from "../component/Game";
import imge from "../assets/imge";
import alph from "../assets/alph";
import { data } from "./Context";
import { Clock3,Banana  } from 'lucide-react';
import Match from "./Match";
export default function Screen() {
  const { handelGame1Click, handelGame2Click, alphacard, imgecard, match,game2,game1,total,time } =
  useContext(data);
  return (
    <div className="screen">
        <div className="point">
        <h1><Banana style={{fill:'yellow'}}></Banana> {total}</h1>
        <h1 ><Clock3></Clock3> {time}</h1>
        </div>
      <div className="Game2">
        <div className="Game1">
          <Game list={imgecard} func={handelGame1Click} col = {'rgba(235, 180, 198, 0.753)'}></Game>
        </div>

        <div className="game2">
          <Game list={alphacard} func={handelGame2Click} col = {'rgba(181, 180, 235, 0.756)'}></Game>
        </div>
      </div>
      {
        match?<Match></Match>:<></>
      }
    </div>
  );
}
