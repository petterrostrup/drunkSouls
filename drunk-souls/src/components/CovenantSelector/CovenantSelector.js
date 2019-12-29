import React, { useState, useEffect }from 'react';
import CovenantCardList from 'components/CovenantCardList/CovenantCardList';
import 'index.js';

function CovenantSelector() {
  let [covenantList, setCovenantList] = useState([]);

  useEffect(() => {
    fetch('covenants.json')
      .then(response => response.json())
      .then(covenants => setCovenantList(covenants))
  }, []);

  return(
    <div className="main-content">
      <CovenantCardList covenants={covenantList} type={"select"}/>
    </div>
  );
}

export default CovenantSelector;