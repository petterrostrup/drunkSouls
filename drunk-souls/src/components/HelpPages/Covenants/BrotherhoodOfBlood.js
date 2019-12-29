import React from 'react'
import Brotherhood from 'img/brotherhood2.png'
import Image from 'react-bootstrap/Image'


class BrotherhoodOfBlood extends React.Component {
  render() {
    document.title = "Drunk Souls - Brotherhood of Blood";
    return (
      <div className="main-content">
        <h1 className="text-center">Brotherhood of Blood</h1>
        <div className="text-center">
            <Image fluid src={Brotherhood} alt="Brotherhood"></Image>
        </div>

        <h2>Overview:</h2>
        <p>
          Brotherhood of Blood is the main "PvP" covenant. They can invade (both players roll dice and the side with the highest sum wins) all players once each for every death in-game.
          As you are a mainly invading covenant, you also roll a higher die (d8) than other players (except Blades of the Darkmoon). When you successfully invade a player, you gain a token that can be used for several benefits and interactions.
        </p>

        <h2>Actions and Effects</h2>
        <ul>
          <li>PvP - You roll a d8 on all invasions both to attack and defend.</li>
          <li>Invasion (+2 Sin) - Invade a player with sins (both players rolls dice and the side with the highest sum wins). If you win, the loser drinks twice. If you lose, drink once. Can invade as many times as you want, but only once per player per death. </li>
          <li>Token of Spite - Gains a token of spite on each successful invasion that can be spent on several effects listed below.</li>
        </ul>

        <h2>Token of Spite</h2>
        <p>
          You can spend your tokens on these interactions anytime you want. Make sure that the other players are aware that you have spent your tokens.
        </p>
        <ul>
          <li>2 tokens - Invade chosen player again this turn.</li>
          <li>6 tokens - Can Invade players twice this entire round</li>
          <li>10 tokens - Roll a d10 instead of your d8 for invasions (Duration: 3 rounds)</li>
          <li>20 tokens - Everyone except you drinks 5</li>
        </ul>
      </div>
    )
  }
}
export default BrotherhoodOfBlood