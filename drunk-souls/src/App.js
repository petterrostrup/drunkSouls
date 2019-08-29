import React from 'react'
import drunk_souls_3 from './img/drunk_souls_3.png';
import drunk_souls_wasted from './img/drunk_souls_wasted.jpg';
import fireball_finish from './img/fireball_finish.png';
class App extends React.Component {
  render() {
    return (
      <div>
      <h1 class="text-center">Drunk Souls Info Page</h1>
      <p>This is an info page for the Drunk Souls drinking game with rule specifications and definitions. The "rules" page covers all the different rules, while the "covenants" page covers the covenant system as a whole</p>
      <div class="row">
          <div class="col-sm-4">
              <img src={drunk_souls_3} width="100%" height="200px" />
          </div>
          <div class="col-sm-4">
              <img src={drunk_souls_wasted} width="100%" height="200px" />
          </div>
          <div class="col-sm-4">
              <img src={fireball_finish} width="100%" height="200px" />
          </div>
      </div>
      
      
      
      <p>The rules can be found in the "Rules" section, covenant overview is available in the "Covenants" section and a simple sin counter can be found in the "Game Session" section (Work In Progress).</p>
    </div>
    
    )
  }
}
export default App