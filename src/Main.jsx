import React from "react";
import "./Main.css";
import Die from "./Die";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";
export default function Main(){
    const [tenzies, setTenzies] = React.useState(false)
    const [dice, setDice] = React.useState(allNewDice())
    function generateNewDie(){
        return{
            value: Math.ceil(Math.random()*6),
            isHeld: false, 
            id: nanoid()
        }
    }
    React.useEffect(() =>{
        //.every function 
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if(allHeld && allSameValue){
            setTenzies(true)
        }
    },[dice])
    function allNewDice(){
        const newArray = []
        for(let i=0;i<10;i++){
           newArray.push(generateNewDie())
        }
        return newArray
    }
    function holdDice(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id?
            {...die, isHeld: !die.isHeld}:
            die
        }))
    }
    function rollDice(){
       if(!tenzies){
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
            die:
            generateNewDie()
        }))
       }else{
        setTenzies(false)
        setDice(allNewDice())
       }
    }
    
    const diceElements =  dice.map(die => <Die  key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)
    return(
        <main className="main--content">
            {tenzies && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each dice to freeze it
                at its current value between rolls
            </p>
           <div className="die--content">
            {diceElements}
           </div>
           <button className="roll--dice"onClick={rollDice}>{tenzies?"New Game":"Roll"}</button>
        </main>
    ) 
}