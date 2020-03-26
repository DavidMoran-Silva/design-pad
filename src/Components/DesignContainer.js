import React, {useState} from 'react'
import DesignBoard from './DesignBoard'
import InputPad from './InputPad'
import { render } from '@testing-library/react'


class DesignContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
             isColor: ["white", "red"],
             showBoard: true,
             board: true,
            
        }
        this.setState({color: 'red', input: 1})
    }
    


render(){
    return(
        <div>
        {/* <button onClick={()=>this.isColor}>Change color</button> */}
            <div isColor={this.isColor}></div>
            {/* <div className="board" style={{background: this.state.color}}></div> */}
            <div className="inputPad"></div>
            <InputPad />
            <DesignBoard />
        </div>
        )
    }

}


   


export default DesignContainer
