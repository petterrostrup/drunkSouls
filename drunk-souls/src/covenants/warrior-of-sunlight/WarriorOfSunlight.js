import React from 'react'
import Warriors from '../../img/warriors2.png'
import Image from 'react-bootstrap/Image'


class WarriorOfSunlight extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Warrior of Sunlight</h1>
        <div className="text-center">
            <Image fluid src={Warriors} alt="Warriors"></Image>
        </div>

        <h2>Overview:</h2>
        <p>
          Warrior of Sunlight is the covenant that focuses on cooperation between the players. They can assist in either attacking or defending other players in invasions if asked for help.
          Otherwise they can offer to take half of a players incoming drinks and praise the sun when they want.
        </p>

        <h2>Actions and Effects</h2>
        <p>As a Sunbro, your actions work a little bit differently. If you use your action to assist in attacking another player, you gain sins. If you defend someone, you lose sins. If you use "Helping hand" to get help, you gain sins. If someone accepts helping hand from you, you lose sins.</p>
        <ul>
          <li>Sunbro - You roll a d4 when assisting in invasions both to attack and defend. Other than that you roll the normal d6 if you are invaded.</li>
          <li>Praise the sun! (+3 Sins) - Everyone must praise the sun and drink once no matter what. If they did not praise the sun, they drink double. Can be used as many times as they want.</li>
          <li>Helping hand (+/-10 sin) - Can make another player drink half of their incoming drinks once per round. Can also offer to drink half of a player's incoming drinks for reduced sin.</li>
          <li>Engage in Jolly Cooperation (+/-3 Sin) - Can help a player either defend against or invade other players when asked. You then throw your dice to help their side</li>
        </ul>
      </div>
    )
  }
}
export default WarriorOfSunlight