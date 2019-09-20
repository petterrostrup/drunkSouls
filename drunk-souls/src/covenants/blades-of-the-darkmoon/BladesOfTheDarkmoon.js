import React from 'react'
import Darkmoon from '../../img/darkmoon.png'

class BladesOfTheDarkmoon extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Blades of the Darkmoon</h1>
        <div className="text-center">
            <img style={{width:"25%"}} src={Darkmoon} alt="Darkmoon"></img>
        </div>


        <h2>Overview:</h2>
        <p>
          Blades of the Darkmoon is the covenant that punish people based on their sins. They can invade other players that have sins and make them drink for each sin if they succeed on that invasion.
          In addition to this they can use "Defend" on a player of their choice every turn. This makes it so that they intercept all invasions on that player and they can choose not to get involved, or they can help you win that invasion.
          These are powerful abilities, and they are therefore permanently cursed and drink twice as much on all drinks.
        </p>

        <h2>Actions and Effects</h2>
        <ul>
          <li>PvP - You roll a d8 on all invasions both to attack and defend.</li>
          <li>Justice - Invade a player with sins (both players rolls dice and the side with the highest sum wins). If you win, the loser drinks once for each sin (the sin is then reset). If you lose, drink for every ten sins the invaded player has rounded up (26 → 3 drinks). Can invade as many times as you want, but only once per player per death. </li>
          <li>Defender - May choose a person to defend each turn. When they are invaded you will automatically be called to their aid. You can either face their invaders on your own, or help the defended in their dice throw). Can only defend 1 player at the time.</li>
          <li>Balance - To balance out this covenant all members are permanently cursed (drinks x 2)</li>
        </ul>
      </div>
    )
  }
}
export default BladesOfTheDarkmoon