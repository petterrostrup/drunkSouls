import React, { useState, useEffect }from 'react';
import CovenantCardList from 'components/CovenantCardList/CovenantCardList';
import 'index.js';
import db from 'database';

function CovenantSelector() {
  let [covenantList, setCovenantList] = useState([]);

  useEffect(() => {
    fetch('covenants.json')
      .then(response => response.json())
      .then(covenants => setCovenantList(covenants))
  }, []);

  let setCovenant = covenantId => {
    db.transaction('rw', db.status, async ()=> {
      const status = await db.status.get({id: 1})
      status.covenantId = covenantId
      status.continue = true
      await db.status.put(status)
    }).then(() => {
      console.log("Transaction commited. Updated covenantId")
    })
  }

  return(
    <div className="main-content">
      <CovenantCardList 
        covenants={covenantList} 
        type={"select"}
        setCovenant={setCovenant}
      />
    </div>
  );
}

export default CovenantSelector;