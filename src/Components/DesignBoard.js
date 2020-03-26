import React, {useState} from 'react'
import "../App.css";



function Pad(props){
    const drop = e => {
        e.preventDefault();
        const colorID = e.dataTransfer.getData('isColor');

        const isColor = document.getElementById('yellow', "red", "blue", "green", "brown", "black", "white", "purple");
        
        e.target.appendChild('isColor');
    }

    const dragOver = e =>{
        e.preventDefault();
    }
    return(
        <div 
        id={props.id} 
        onDrop={drop} 
        onDragOver={dragOver} 
        className={props.className, "board"} 
        >
            
            <h4>{props.children}</h4>
        </div>
        /* <div>
            {props.children}
        </div> */
    )
}

function DesignBoard()
{
    return (
        <div>
            <h1 className='header'>Design Pad</h1>
            <div className='pad'>
                <Pad />
                <Pad />
                <Pad />
                <Pad />
            </div>
        </div>
        
    );
}


export default DesignBoard;