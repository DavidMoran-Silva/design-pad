import React, {useState} from 'react';
import './InputPad.css';

function Pad(props){
    const dragStart = e =>{
        const target = e.target;
        e.dataTransfer.setData('Color', target.id);
        setTimeout(() => {
            target.style.display = "none";
        }, 0)
    }
    const dragOver = e =>{
        e.stopPropagation();
    }

    return(
        <div 
        id={props.id}
        className="inputPad"
        draggable="true"
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            <h4>{props.isColor}</h4>
        </div>
    )
}

function Color(){
    const isColor = () =>{
    const red = document.getElementById("red")
    const blue = document.getElementById("blue")
    const green = document.getElementById("green")
    const yellow = document.getElementById("yellow")
    const purple = document.getElementById("purple")
    const white = document.getElementById("white")
    const black = document.getElementById("black")
    const brown = document.getElementById("brown")
    }
    return(
        <div>
            <button onClick={isColor="red"}></button>
            <button onClick={isColor="blue"}></button>
            <button onClick={isColor="green"}></button>
            <button onClick={isColor="yellow"}></button>
            <button onClick={isColor="purple"}></button>
            <button onClick={isColor="white"}></button>
            <button onClick={isColor="black"}></button>
            <button onClick={isColor="brown"}></button>
        </div>
    )
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }




function InputPad(){
    return(
        <div>
        <h1 className='header'>Input Pad</h1>
            <div className='inputBoard'>
                <Pad draggable = "true" name="1" isColor="red"/>
                <Pad draggable = "true" name="2" isColor="blue"/>
                <Pad draggable = "true" name="3" isColor="green"/>
                <Pad draggable = "true" name="4" isColor="yellow"/>
                <Pad draggable = "true" name="5" isColor="purple"/>
                <Pad draggable = "true" name="6" isColor="white"/>
                <Pad draggable = "true" name="7" isColor="black"/>
                <Pad draggable = "true" name="8" isColor="brown"/>
            </div>

        </div>
    )
}
export default InputPad