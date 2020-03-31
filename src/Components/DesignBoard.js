import React, {useState} from 'react'
import "../App.css";



function Pad(props){
    const[color,setColor] = useState("white")      //hooks
    //color will hold val in useState 
    //setColor updates val


    const drop = e => {
        e.preventDefault();
        const colorID = e.dataTransfer.getData('Color');

        setColor(colorID)
       // const isColor = document.getElementById(colorID);
    
        // 
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
        style = {{backgroundColor:color}}
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