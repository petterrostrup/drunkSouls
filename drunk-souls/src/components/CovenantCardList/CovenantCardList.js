import React, {useState, useEffect} from 'react';
import {Card, Nav, CardDeck} from 'react-bootstrap';

function CovenantCard({image, title, text, link, buttonText}) {
  let source = require('../../'+image);
  return(
    <Card text="white" className="card-dark">
      <Card.Img variant="top" src={source} alt="Card image cap"></Card.Img>
      <Card.Body className="flexing-container">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Nav.Link href={link} className="btn btn-secondary navbar-dark btn-end">{buttonText}</Nav.Link>
      </Card.Body>
    </Card> 
  )
}

function CovenantCardList(props){

  let [cardDeck, setCardDeck] = useState([]);

  useEffect(() => {
    
    let covenantList = props.covenants
      .map(covenant=>
        <CovenantCard
          key={covenant.id}
          image={covenant.image}
          title={covenant.title}
          text={covenant.text}
          link={covenant.link}
          buttonText={covenant.buttonText}
        />
    );
  
    let fillCardDeck = () => {
      let i = 0;
      let deckList = [];
      let listOfThree = [];
      covenantList.forEach(function (covenant, index, array){
        if (i === 3){
          deckList.push(<CardDeck key={index}>{listOfThree}</CardDeck>);
          i = 0;
          listOfThree = [];
          listOfThree.push(covenant)
        } else if (index === array.length -1){
          listOfThree.push(covenant);
          deckList.push(<CardDeck key={index}>{listOfThree}</CardDeck>);
        } else {
          listOfThree.push(covenant);
          i++;
        }
      });
      setCardDeck(deckList);
    };

    fillCardDeck()

  }, [props]);


  return (
    <div>
      {cardDeck}
    </div>
  );
}
export default CovenantCardList;