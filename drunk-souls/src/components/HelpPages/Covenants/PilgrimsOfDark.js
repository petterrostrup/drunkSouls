import React from 'react'
import Pilgrims from 'img/pilgrims2.png'
import Image from 'react-bootstrap/Image'

class PilgrimsOfDark extends React.Component {
  render() {
    document.title = "Drunk Souls - Pilgrims of Dark";
    return (
      <div className="main-content">
        <h1 className="text-center">Pilgrims of Dark</h1>
          <div className="text-center">
              <Image fluid src={Pilgrims} alt="Pilgrims"></Image>
          </div>

          <h2>Overview:</h2>
          <p>
            Pilgrims of Dark is the covenant that shakes up the covenant interactions. You can curse another player each turn so that they drink double untill the next turn.
            When someone dies, you can also make them drink with you.
          </p>

          <h2>Actions and Effects</h2>
          <ul>
            <li>Curse (+3 Sin) - Once for each death you may curse a player. This player must drink twice the amount he usually drinks (emptying drinks does not count) until the next death.</li>
            <li>Offering (+3 Sin) - Make the player who died drink with you. They stop drinking when you do. No multipliers count for those drinks</li>
          </ul>
      </div>
    )
  }
}
export default PilgrimsOfDark