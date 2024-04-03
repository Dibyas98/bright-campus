import React, { createContext, useEffect, useState } from 'react'
import imge from "../assets/imge"
import alph from "../assets/alph"
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const newimge = shuffleArray(imge);
  const newalpha = shuffleArray(alph)

export const data = createContext();




export default function Context({children}) {
    const[flipcard,setflipcard] = useState({
        card1:true,
        card2:false
    })

    const [imgecard,setimageCard]=useState(newimge);
    const [alphacard,setalphaCard] = useState(newalpha)
    const [game1,setGame1] = useState(null);
    const handelGame1Click= (arg)=>{

        if(game1 == null){
            setGame1(arg)
            newimge.forEach((ele) =>{
                if(ele.name == arg.name){
                    ele.flip = false
                    console.log('done');
                }
            })
            setimageCard(newimge)
            
        }

    }
    const callgame1= (arg) =>{
        
    }
    useEffect(()=>{
        setmatch(!match)
    },[alphacard])

    const[game2,setGame2]=useState(null)
    const handelGame2Click = (arg) =>{
        
        
        if(game1!=null){
            setGame2(arg)
        newalpha.forEach((ele)=>{
            if(ele.name == arg.name){
                ele.flip = false
            }
        })
        setalphaCard(newalpha)
            setTimeout(() => {
                
                check(arg.name);
            }, 2000);
        }else{
            console.log("select game 1");
        }
        // arg2(false)
    }
    const check = (arg)=>{
        if(arg === game1.name){
            setdisplay(true)
            settotal((prev) =>prev+1)
        }else{
            setdisplay(false)
        }
        
        newimge.forEach((ele) =>{
            if(ele.name == game1.name){
                ele.active = false
                console.log('done');
            }
        })
        setimageCard(newimge)
        newalpha.forEach((ele) =>{
            if(ele.name == arg){
                ele.active = false
                console.log('done');
            }
        })
        setclick((prev) => prev+1)
        setGame1(null);
        setGame2(null)
        setmatch(true)
        setTimeout(() => {
            setmatch(false)
        }, 1000);
    }

    const[match,setmatch] = useState(true)
    const[display,setdisplay] = useState(false)
    const [total,settotal]=useState(0)
    const [time, setTime] = useState(60);
    const[click,setclick] =useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [time]);
  const handleStart = () => {
    setTime(60); // Set initial time when start button is clicked
    settotal(0)
};



  return (
    <data.Provider value={{game1,handelGame1Click,handelGame2Click,game2,alphacard,imgecard,flipcard,match,display,total,time,handleStart,click,setclick}}>
        {children}
    </data.Provider>
  )
}
