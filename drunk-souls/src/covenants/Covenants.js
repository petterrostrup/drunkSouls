import React from 'react'
import Darkmoon from '../img/darkmoon.jpg'
import Brotherhood from '../img/brotherhood.jpg'
import Champions from '../img/champions.jpg'
import Pilgrims from '../img/pilgrims.jpg'
import Warriors from '../img/warriors.jpg'
import { Card, CardDeck, Nav } from 'react-bootstrap'


import '../index.css'

class Covenants extends React.Component {

  render() {
    return (
      <div>
        <h1 className="text-center">Covenants overview</h1>
        <p>
          Covenants are a set of additonal game mechanics that can be added to a session of Drunk Souls to give players currently not playing other ways to interact with the game. 
          It is highly recommended to add this when there are more than three players.
        </p>
        <h2>How does it work?</h2>
        <p>
          Each player selects a covenant when they join the session. The available covenants are outlined below. You then gain a set of extra interactions such as "praise the sun" and "invasion" depending on your selected covenant.
          You then use these interactions as you wish and as the rules allow for the rest of the session.
        </p>
        <h2>Sins?</h2>
        <p>
          Sins are a balance-measure that is added to the game that makes aggressive players drink more themselves. Most interactions use this in some way. Some add sins to the player and some removes them.
          Sins can be used by a "Blade of the Darkmoon"-member to punish those that make others drink based on how much they have done. 1 sin = 1 drink for the player that looses against a "justice invasion" and then all their sins are reset.
        </p>
        <h2>Changing Covenant</h2>
        <p>
          Players can change their covenant at any time, but 5 sins are added to their sin counter each time they do so.
        </p>

        <h2>All Covenants:</h2>
        <CardDeck>
          <Card text="white" className="card-dark">
              <Card.Img variant="top" src={Darkmoon} alt="Card image cap"></Card.Img>
              <Card.Body className="flexing-container">
                  <Card.Title>Blades of the Darkmoon</Card.Title>
                  <Card.Text>The covenant that focuses primarily on "PvP". This covenant balances the other covenants by making them drink for their sins.</Card.Text>
                  <Nav.Link href="/covenants/blades-of-the-darkmoon" className="btn btn-secondary btn-end">Read more</Nav.Link>
              </Card.Body>
          </Card>
          <Card text="white" className="card-dark">
              <Card.Img variant="top" src={Brotherhood} alt="Card image cap"></Card.Img>
              <Card.Body className="flexing-container">
                  <Card.Title>Brotherhood of Blood</Card.Title>
                  <Card.Text>The covenant that focuses primarily on "PvP". This lets you invade other players in return for sins</Card.Text>
                  <Nav.Link href="/covenants/brotherhood-of-blood" className="btn btn-secondary btn-end">Read more</Nav.Link>
              </Card.Body>
          </Card>
          <Card text="white" className="card-dark">
              <Card.Img variant="top" src={Champions} alt="Card image cap"></Card.Img>
              <Card.Body className="flexing-container">
                  <Card.Title>Company of Champions</Card.Title>
                  <Card.Text>This covenant focuses mainly on the game itself. Makes the game more difficult in return for rewards</Card.Text>
                  <Nav.Link href="/covenants/company-of-champions" className="btn btn-secondary btn-end">Read more</Nav.Link>
              </Card.Body>
          </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
          <Card text="white" className="card-dark">
              <Card.Img variant="top" src={Pilgrims} alt="Card image cap"></Card.Img>
              <Card.Body className="flexing-container">
                  <Card.Title>Pilgrims of Dark</Card.Title>
                  <Card.Text>This covenant shakes up how the covenants interact with eachother. You can curse players so that they have to drink more.</Card.Text>
                  <Nav.Link href="/covenants/pilgrims-of-dark" className="btn btn-secondary btn-end">Read more</Nav.Link>
              </Card.Body>
          </Card>
          <Card text="white" className="card-dark">
              <Card.Img variant="top" src={Warriors} alt="Card image cap"></Card.Img>
              <Card.Body className="flexing-container">
                  <Card.Title>Warrior of Sunlight</Card.Title>
                  <Card.Text>The Sunbros. This covenant focuses on helping other players and praising the sun.</Card.Text>
                  <Nav.Link href="/covenants/warrior-of-sunlight" className="btn btn-secondary btn-end">Read more</Nav.Link>
              </Card.Body>
          </Card>
          <Card text="white" style={{ opacity: 0 }}>
              <Card.Body>
               
              </Card.Body>
          </Card>
        </CardDeck>

      </div>
    )
  }
}
export default Covenants