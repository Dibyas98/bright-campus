import React, { useContext } from "react";
import Game from "../component/Game";
import imge from "../assets/imge";
import alph from "../assets/alph";
import { data } from "./Context";
import Match from "./Match";
export default function Screen() {
  const { handelGame1Click, handelGame2Click, alphacard, imgecard, match,game2,game1,total,time } =
  useContext(data);
  return (
    <div className="screen">
        <div>
        <h1>Points: {total}</h1>
        <h1>time:{time}</h1>
        </div>
      <div className="Game2">
        <div className="Game1">
          <Game list={imgecard} func={handelGame1Click}></Game>
        </div>

        <div className="game2">
          <Game list={alphacard} func={handelGame2Click}></Game>
        </div>
      </div>
      {
        match?<Match></Match>:<></>
      }
    </div>
  );
}
