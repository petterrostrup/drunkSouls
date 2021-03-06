import React, {useState, useEffect} from 'react';
import {Card, CardDeck, Button} from 'react-bootstrap';

function CovenantCard({id, image, title, text, link, buttonText, type, setCovenant}) {
  let source = require('../../'+image);
  let doNothing = () => {}
  let clickEvent = type === 'select' ? setCovenant : doNothing
  return(
    <Card text="white" className="card-dark" style={{marginBottom:"2rem"}}>
      <Card.Img variant="top" src={source} alt="Card image cap"></Card.Img>
      <Card.Body className="flexing-container">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button 
          href={link} 
          onClick={() => clickEvent(id)} 
          className="btn btn-secondary navbar-dark btn-end" >
            {buttonText}
        </Button>
      </Card.Body>
    </Card> 
  )
}
function FillerCard(){
  return (
    <Card text="white" style={{ opacity: 0 }}>
      <Card.Body></Card.Body>
    </Card>
  )
}

function CovenantCardList(props){

  let [cardDeck, setCardDeck] = useState([]);

  useEffect(() => {
    let uniqid = require('uniqid');
    let covenantList = props.covenants
      .map(covenant=> 
        <CovenantCard
          key={covenant.id}
          id={covenant.id}
          image={covenant.image}
          title={covenant.title}
          text={covenant.text}
          link={covenant.type[props.type].link}
          buttonText={covenant.type[props.type].buttonText}
          type={props.type}
          setCovenant={props.setCovenant}
        />
    );
  
    // Fills the page with covenant cards, but no more than 3 on each row
    let fillCardDeck = () => {
      let i = 0;
      let cardDeckArray = [];
      let covenantCardArray = [];
      covenantList.forEach(function (covenant, index, array){
        if (i === 3){
          cardDeckArray.push(<CardDeck key={uniqid()}>{covenantCardArray}</CardDeck>);
          i = 1;
          covenantCardArray = [];
          covenantCardArray.push(covenant)

        } else if (index === array.length -1){
          covenantCardArray.push(covenant);
          if (i !== 0){
            [...Array(2-i)].forEach(() => {
              covenantCardArray.push(<FillerCard key={uniqid()}/>)
            });
          }
          cardDeckArray.push(<CardDeck key={uniqid()}>{covenantCardArray}</CardDeck>);

        } else {
            covenantCardArray.push(covenant);
            i++;
        }
      });
      setCardDeck(cardDeckArray);
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