import React, { Component } from 'react'
import "./home.css"

interface IProps{

}

interface IState{
    inputNumber : string
}

export default class home extends Component<IProps,IState> {
    state : IState ={
        inputNumber : ""
    }

    clearInput=()=>{
        this.setState({inputNumber:""})
    }

    getValue=(v : string)=>{
        this.setState(p=>({inputNumber : p.inputNumber + v}))
    }

    getResult=()=>{
        const {inputNumber} = this.state
        this.setState({inputNumber : eval(inputNumber)})
    }
    render() {
        const {inputNumber} = this.state
        return (
            <div className='calculator-app'>
                <input className="input-className" placeholder='0' value={inputNumber} />
                <div className='calculator-buttons'>
                <div className="add-button">
                    <div className='calculator'>
                        <button type="button" className='num-buttons' onClick={this.clearInput}>Reset</button>
                        <button type="button" className='num-buttons' onClick={()=>this.getValue("/")}>/</button>
                        <button type="button" className='num-buttons' onClick={()=>this.getValue("*")}>*</button>
                        <button type="button" className='num-buttons' onClick={()=>this.getValue("-")}>-</button>
                    </div>
                    <div className='calculator'>
                    <div>
                        <div>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("7")}>7</button>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("8")}>8</button>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("9")}>9</button>
                        </div>
                        <div>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("4")}>4</button>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("5")}>5</button>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("6")}>6</button>
                        </div>
                        <div>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("1")}>1</button>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("2")}>2</button>
                            <button type="button" className='num-buttons' onClick={()=>this.getValue("3")}>3</button>
                        </div>
                        <div>
                            <button type="button" className="extra-width-buttons" onClick={()=>this.getValue("0")}>0</button>
                            <button type="button" className="num-buttons" onClick={()=>this.getValue(".")}>.</button>
                        </div>
                    </div>
                    <div className="add-button"> 
                        <button type="button" className='extra-height-buttons' onClick={()=>this.getValue("+")}>+</button>
                        <button type="button" className='extra-height-buttons'  onClick={this.getResult}>=</button>
                    </div>
                    </div>
    
                    
                </div>
                </div>
            </div> 
        )
      }
}
