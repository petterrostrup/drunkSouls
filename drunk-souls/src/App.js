import React, { useState } from 'react'
import DualButtonCard from 'components/DualButtonCard/DualButtonCard';

function App() {
  const mainMenu = {
    title: "Welcome to Drunk Souls!",
    firstLink: "",
    firstButton: "Git Drunk",
    secondLink: "",
    secondButton: "Host Game"
  }
  const joinMenu = {
    title: "",
    firstLink: "",
    firstButton: "Join Game",
    secondLink: "/select-covenant",
    secondButton: "Go Offline"
  }

  let [optionScreen, setOptionScreen] = useState(mainMenu)

  let handleMenuChange = buttonPressed => {
    if(buttonPressed === mainMenu.firstButton) {
      setOptionScreen(joinMenu)
      console.log(optionScreen.title)
    } else if (buttonPressed === mainMenu.secondButton){
      console.log(buttonPressed)
    } else if (buttonPressed === joinMenu.firstButton) {
      console.log("Let's join a game!")
    } else if (buttonPressed === joinMenu.secondButton) {
      console.log('Lets Go Offline!')
    }
  }

  return (
    <div  className="main-content" style={{marginTop:"10rem"}}>
      <DualButtonCard 
        title={optionScreen.title}
        firstLink={optionScreen.firstLink}
        firstButton={optionScreen.firstButton}
        secondLink={optionScreen.secondLink}
        secondButton={optionScreen.secondButton}
        handleMenuChange={handleMenuChange}
        />
    </div>
  )
}
export default App