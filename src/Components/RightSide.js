import React from 'react'

class RightSide extends React.Component {

    state = {
        outcome: " "
    }

    clickHandler = () => {
        let balls = 4
        let strikes = 3
        let pitch = (Math.floor(Math.random() * 70) + 1);
            if (parseInt(pitch) <= 10) {
                this.setState({outcome: `Ball ${balls}`})
            } else if ((parseInt(pitch)) > 11 && (parseInt(pitch)) < 25) {
                this.setState({outcome: `Strike ${strikes}`})
            } else if ((parseInt(pitch)) > 26 && (parseInt(pitch)) < 35) {
                this.setState({outcome: "Single"})
            } else if ((parseInt(pitch)) > 36 && (parseInt(pitch)) < 42) {
                this.setState({outcome: "Double"})
            } else if ((parseInt(pitch)) > 43 && (parseInt(pitch)) < 47) {
                this.setState({outcome: "Triple"})
            } else if ((parseInt(pitch)) > 48 && (parseInt(pitch)) < 59) {
                this.setState({outcome: "Homerun"})
            } else if ((parseInt(pitch)) > 60 && (parseInt(pitch)) < 64) {
                this.setState({outcome: "Hit By Pitch"})
            } else {
                this.setState({outcome: "Ground Out"})
            }
            console.log(this.state)
    } 

    testHandler = () => {
        let textArray = ["yes", "no", "maybe so"]
        let randomIndex = Math.floor(Math.random() * textArray.length); 
        let randomElement = textArray[randomIndex];
        console.log(randomElement)
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