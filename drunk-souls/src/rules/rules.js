import React from 'react'

class Rules extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Drunk Souls Rules Overview</h1>
        <p>
          This is an overview of all the rules for the drunk souls drinking game. The rules are divided into several categories that depend on how experienced the players are.
          <br></br>
          <br></br>
        </p>
        <p>
          The base rules are for all players, and additional rules are decided based on your experience like this:
        </p>

          <ul>
            <li>New players - Players that have not yet completed a dark souls game.</li>
            <li>Advanced players - Players that have completed at least one dark souls game.</li>
            <li>Expert players - Advanced players that have a higher level of familiarity and skill with the game that are not limited enough by the advanced rules.</li>
          </ul>
          All rulesets above the base rules also include the previous ones. E.g. expert players play with the expert rules in addition to the base rules and advanced rules.

        <h2>Base Rules</h2>
        <p>These rules are the standard rules that all players must follow.</p>
        <ol>
          <li>You die, you drink (Optionally everyone drinks). Pass the controller.</li>
          <li>Failure to reclaim souls, extra drink.</li>
          <li>If you pick up someone else’s souls, they drink.</li>
          <li>Environmental death (falling off a cliff etc.), drink two.</li>
          <li>Kill a friendly NPC - finish your drink you douche.</li>
          <li>Kill a boss - everyone drinks thrice.</li>
          <li>Use healing item - drink.</li>
          <li>If human/kindled - drink double.</li>
          <li>If a new player kills a boss on their first try - everyone finishes their drink.</li>
          <li>If someone rages or is otherwise salty, that person drinks.</li>
        </ol>

        <h2>Advanced Rules</h2>
        <p>These rules are for advanced players to follow. Also in addition to the base rules.</p>
        <ol>
          <li>Advanced players must drink all penalty drinks while it’s their turn, not after.</li>
          <li>If any advanced player fails against a boss - drink twice</li>
          <li>If any advanced player is helping or giving hints, they must drink. If they are asked for help, the one that asked takes the drink instead.</li>
        </ol>

        <h2>Expert Rules</h2>
        <p>These rules are for the Expert players. Expert players are chosen by the group as advanced players that progresses too fast. These rules also include the base rules and advanced rules</p>
        <ol>
          <li>All drinks are doubled on your turn</li>
          <li>You can’t attempt the boss until all other players of a lower skill level has tried at least twice.</li>
          <li>The expert players must answer all relevant lore questions correctly. Otherwise drink once.</li>
        </ol>

        <h2>Challenge Rules</h2>
        <p>These rules are entirely optional for those that want an extra challenge. These can be added as an addition to any ruleset. New players can also try this if they want</p>
        <ol>
          <li>Can’t equip armor</li>
          <li>Can only change equipment at bonfire</li>
          <li>No buffs (Items or spells)</li>
          <li>Has to kill all aggroed enemies</li>
          <li>Drinks for each skipped item or treasure (Not all in the area, but if you miss one nearby and it is pointed out)</li>
          <li>Optional: Must explain valid tactics against enemies while playing if asked (The asking player takes a drink as well as you) </li>
        </ol>
      </div>
    )
  }
}
export default Rules