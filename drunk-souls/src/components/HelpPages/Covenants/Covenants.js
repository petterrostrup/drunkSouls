import React, {useState, useEffect} from 'react'

import CovenantCardList from 'components/CovenantCardList/CovenantCardList'


import 'index.css'

function Covenants() {
  document.title = "Drunk Souls - Covenants";
  let [covenants, setCovenants] = useState ([]);

  useEffect(() => {
    fetch('covenants.json')
      .then(response => response.json())
      .then(covenants => setCovenants(covenants));
  },[]);

  return (
    <div className="main-content">
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
      <CovenantCardList covenants={covenants}/>

    </div>
  )
}

export default Covenants