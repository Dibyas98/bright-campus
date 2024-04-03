import React, { useContext, useState } from "react";
import intro_1 from "../assets/intro-1.png";
import intro_2 from "../assets/intro-2.png";
import intro_3 from "../assets/intro-3.png";
import intro_4 from "../assets/intro-4.png";
import Screen from "./Screen";
import { data } from "./Context";
import TryAgain from "./TryAgain";

export default function Intro() {
  const [present, setPresent] = useState("in1");
  const { handleStart, time } = useContext(data);

  const handleNext = () => {
    console.log(present);
    switch (present) {
      case "in1":
        setPresent("in2");
        break;
      case "in2":
        setPresent("in3");
        break;
      case "in3":
        setPresent("in4");
        break;
      case "in4":
        setPresent("screen");
        break;
    case 'screen':
      default:
        setPresent("screen");
        break;
    }
  };

  const renderContent = () => {
    switch (present) {
      case "in1":
        return (
          <>
            <img src={intro_1} alt="" />
            <button className="btn" onClick={handleNext}></button>
          </>
        );
      case "in2":
        return (
          <>
            <img src={intro_2} alt="" />
            <button className="btn" onClick={handleNext}></button>
          </>
        );
      case "in3":
        return (
          <>
            <img src={intro_3} alt="" />
            <button className="btn" onClick={handleNext}></button>
          </>
        );
      case "in4":
        return (
          <>
            <img src={intro_4} alt="" />
            <button
              className="btn"
              onClick={() => {
                handleNext();
                handleStart();
              }}
            ></button>
          </>
        );
      case "screen":
        return (
          <>{time > 0 ? <Screen /> : <TryAgain trya={handleNext}></TryAgain>}</>
        );
      default:
        return null;
    }
  };

  return <div className="intro">{renderContent()}</div>;
}
