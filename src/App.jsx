import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Context, { data } from "./component/Context";
import Screen from "./component/Screen";
import Intro from "./component/Intro";
import Total from "./component/Total";
function App() {
  const [count, setCount] = useState(0);
  const {click} = useContext(data)


  return (
    <>
      {click<6?<Intro></Intro>:<Total></Total>}
      
    </>
  );
}

export default App;
