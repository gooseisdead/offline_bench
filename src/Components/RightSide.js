import React from 'react'

class RightSide extends React.Component {

    state = {
        outcome: " "
    }

    clickHandler = () => {

        let pitch = (Math.floor(Math.random() * 70) + 1);
            if (parseInt(pitch) <= 10) {
                this.setState({outcome: walk})
            } else if ((parseInt(pitch)) > 11 && (parseInt(pitch)) < 25) {
                this.setState({outcome: strikeout})
            } else if ((parseInt(pitch)) > 26 && (parseInt(pitch)) < 35) {
                this.setState({outcome: single})
            } else if ((parseInt(pitch)) > 36 && (parseInt(pitch)) < 42) {
                this.setState({outcome: double})
            } else if ((parseInt(pitch)) > 43 && (parseInt(pitch)) < 47) {
                this.setState({outcome: triple})
            } else if ((parseInt(pitch)) > 48 && (parseInt(pitch)) < 59) {
                this.setState({outcome: homerun})
            } else if ((parseInt(pitch)) > 60 && (parseInt(pitch)) < 64) {
                this.setState({outcome: hitbypitch})
            } else {
                this.setState({outcome: groundout})
            }
            console.log(this.state)
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