import React, { Component } from 'react';
import './Coin.css';
import Heads from './new-heads.png';
import Tails from './new-tails.jpg';
import Toss from './flipping-coin.gif';

class Coin extends Component {
    isFlippingCoin = () => this.setState({ flippingCoin: true });

    evaluateCoinSide = () => {
        const face = this.props.face;

        if (this.props.flipping)
            return <div> <img src={Toss} alt="flipping-coin" /> </div>

        if (face === "Heads") {
            return <div> <img className="coin-img" src={Heads} alt="heads" /> </div>;
        }
        else if (face === "Tails") {
            return <div> <img className="coin-img" src={Tails} alt="heads" /> </div>;
        }
    }

    render = () => {
        return (
            <div>
                {this.evaluateCoinSide()}
            </div>
        );
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 2);
}

function getRandomFace() {
    let index = getRandomNumber();

    if (index === 0) return "Heads";
    return "Tails";
}

export { getRandomFace, Coin }; 