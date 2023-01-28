import React from "react";
import "./Die.css"
export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div 
        className="die--face" 
        style = {styles}
        onClick={props.holdDice} 
        >
            <h2 className="die--num">{props.value}</h2>
        </div>
    )
}
/**this renders one at a time */
/*<div className="out--box">
            <div className="first--row">
                <h3>1</h3>
                <h3>1</h3>
                <h3>1</h3>
                <h3>1</h3>
                <h3>1</h3>
            </div>
            <div className="second--row">
                <h3>1</h3>
                <h3>1</h3>
                <h3>1</h3>
                <h3>1</h3>
                <h3>1</h3>
            </div>
        </div> */