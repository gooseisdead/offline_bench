import React from 'react'

class Card extends React.Component {

    

    render () {
    const {card} = this.props;
    return (
        
        <div className="card">
            <p>{card.name}</p>
            <p>{card.position}</p>
            <img src={card.img}></img>
            <ul className="list">
                <li>Stikeouts: {card.strikeouts}</li>
                <li>Walks: {card.walks}</li>
                <li>Singles: {card.singles}</li>
                <li>Doubles: {card.doubles}</li>
                <li>Triples: {card.triples}</li>
                <li>Homeruns: {card.homeruns}</li>
                <li>Groundouts: {card.groundouts}</li>
            </ul>
        </div>
        
        )
    }
}

export default Card;