import React from 'react'

class RightSide extends React.Component {

    state = {
        outcome: " "
    }

    clickHandler = () => {
        
        let pitch = (Math.floor(Math.random() * 70) + 1);
        console.log(pitch)
            if (parseInt(pitch) <= 10) {
                return <h2>Ball Four</h2>
            } else if ((parseInt(pitch)) > 11 && (parseInt(pitch)) < 25) {
                return <h2>Strike Three!</h2>
            } else if ((parseInt(pitch)) > 26 && (parseInt(pitch)) < 35) {
                return <h2>Single</h2>
            } else if ((parseInt(pitch)) > 36 && (parseInt(pitch)) < 42) {
                return <h2>Double</h2>
            } else if ((parseInt(pitch)) > 43 && (parseInt(pitch)) < 47) {
                return <h2>Triple</h2>
            } else if ((parseInt(pitch)) > 48 && (parseInt(pitch)) < 59) {
                return <h2>Homerun</h2>
            } else if ((parseInt(pitch)) > 60 && (parseInt(pitch)) < 64) {
                return <h2>Hit By Pitch</h2>
            } else {
                return <h2>Ground Out</h2>
            }
    } 

    testHandler = () => {
        let textArray = ["yes", "no", "maybe so"]
        let randomIndex = Math.floor(Math.random() * textArray.length); 
        let randomElement = textArray[randomIndex];
        return <h2>`${randomElement}`</h2>
    }

    render = () => {
        return (
        <div className="right-side">
            <h3>The Score</h3>
            <button onClick={this.clickHandler}>Pitch</button>
            <button onClick={this.testHandler}>Tryout</button>
        </div>
        )
    }
}

export default RightSide;