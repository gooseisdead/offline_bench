import React from 'react'
import Card from '../Components/Card.js'

class CardContainer extends React.Component {

    state = {
        api: []
    }
    
    componentDidMount() {
        fetch("http://localhost:8000/players")
        .then(resp => resp.json())
        .then(data => this.setState({ api: data}))
    }
      
    renderPlayers = () => {
        let filteredArray = this.state.api
        return filteredArray.map(el => <Card key={el.id} card={el} />)
    }

    render() {
        return(
            <div className="card-container">
                    <h3>Starting Lineup</h3>
                        <div>{this.renderPlayers()}</div>
            </div>
        )
    }
}

export default CardContainer;