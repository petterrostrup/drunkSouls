import React from 'react'
import Champions from '../../img/champions2.png'
import Image from 'react-bootstrap/Image'

class CompanyOfChampions extends React.Component {
  render() {
    document.title = "Drunk Souls - Company of Champions";
    return (
      <div>
        <h1 className="text-center">Company of Champions</h1>
        <div className="text-center">
            <Image fluid src={Champions} alt="Champions"></Image>
        </div>


        <h2>Overview:</h2>
        <p>
          Company of Champions is the covenant for those that want more challenging gameplay. This is mainly a faction that focuses on things that happen on your turn and gives a significant difficulty increase by enforcing the challenge ruleset.
          These "challenge rules" are added in addition to all your other rules. By progressing despite the increased difficulty, you make other players drink to your skill and glory.
        </p>

        <h2>Actions and Effects</h2>
        <ul>
          <li>Champion - Plays at a higher skill-level (New players → Advanced Players → Expert Players → Expert Players Challenge Mode). E.g. If an advanced player picks this covenant, they play with Expert Rules.</li>
          <li>Challenger - Can choose to play with the challenge-rules. If you are playing with the challenge-rules, all victory drinks are doubled (unless you're an expert player that has to play with these rules) </li>
          <li>Victory - By progressing, the other players must drink to your glory and accomplishments. Events, triggers and number of drinks are added below</li>
          <li>Opt-in - You gain no sins for switching to this covenant. You also gain no sins by switching out of this covenant as long as it is to the same covenant that you had before joining Company of Champions</li>
        </ul>

        <h2>Victory</h2>
        <p>By completing these actions while in the Company of Champions, all other players must drink to your glory</p>
        <ul>
          <li>Opened Shortcut - 1 drink for all other players</li>
          <li>New Bonfire - 2 drinks for all other players</li>
          <li>Miniboss kill - 3 drinks for all other players</li>
          <li>Boss kill - 4 drinks for all other players</li>
        </ul>
      </div>
    )
  }
}
export default CompanyOfChampions