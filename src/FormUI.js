import React, { Component } from 'react'
import {Coin, getRandomFace} from './Coin'; 

export default class FormUI extends Component{
    constructor(props){
        super(props);
        this.state = { 
            selectedValue: "random", 
            isInputDisabled: false, 
            isButtonDisabled: false, 
            isSubmitted: false,
            message: "It's your call!",
            coinFlipping: false,
            face: getRandomFace()
        }; 
         
    }

    handleChange =(event) => {
        let newEvent = event.target.value;
        this.setState({selectedValue: newEvent}); 
    } 

    //Disable the input field 
    DisableInput = () => this.setState({isInputDisabled:true});
    
    //makes the ButtonClicked state true 
    ButtonClicked = () => this.setState({isSubmitted:true}); 

    flipOnClick = () => {
        if(this.state.coinFlipping) return;

        console.log('button clicked!'); 
        if(this.state.selectedValue!=="random") {
            this.DisableInput(); 
            this.ButtonClicked(); 

            this.setState({coinFlipping:true}); 
            window.setTimeout(()=>{
                this.setState({
                    coinFlipping:false, 
                    face: getRandomFace(),
                    isInputDisabled: false
                });
            }, 3000);
        }
        else {
            this.setState({message: "Please take a call!"}); 
        }
    }

    evaluateAppState =() => {
        return (this.state.isInputDisabled) && (this.state.isSubmitted);
    }


    render =() => {
        return(
        <div>
            <h1>American Coin Tossing App</h1>
            <form onSubmit={e=>{ e.preventDefault();  }}>
                <label htmlFor=" input"> 
                    {this.state.message}  
                </label>
                    <select  onChange={this.handleChange}
                            disabled = {(this.state.isInputDisabled)? "isInputDisabled":""}>
                        <option type="text" value="random"> Take a call! </option>
                        <option type="text" value="Heads"> Heads </option>
                        <option type="text" value="Tails"> Tails </option>
                    </select>
                    <div>
                        <button 
                            className="button-primary" 
                            onClick={this.flipOnClick}
                            > Flip Coin! </button>
                    </div>
            </form>

            <div>
                {
                    <Coin flipping={this.state.coinFlipping} face={this.state.face}/> 
                }
            </div>
        </div>
        ); 
    }
}
