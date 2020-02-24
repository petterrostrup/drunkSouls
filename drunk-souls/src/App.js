import React, { useState, useEffect } from 'react'
import DualButtonCard from 'components/DualButtonCard/DualButtonCard'
import db from 'database'


function App() {

  const defaultStatus = {
    continue: false,
    covenantId: "",
    numberOfSins: 0,
    numberOfTokens: 0
  }
  const defaultMenu = {
    title: "Welcome to Drunk Souls!",
    firstLink: "",
    firstButton: "Git Drunk",
    firstButtonDisabled: false,
    secondLink: "",
    secondButton: "Host Game",
    secondButtonDisabled: true
  }
  
  let [menuList, setMenuList] = useState([])
  let [currentMenu, setCurrentMenu] = useState(defaultMenu)

  useEffect(() => {
    fetch('menus.json')
    .then(response => response.json())
    .then(menus => setMenuList(menus))
  }, []);

  let [savedStatus, setSavedStatus] = useState(defaultStatus)

  useEffect(() => {
    const getDataFromLocalDatabase = () => {
      db.transaction('r', db.status, async ()=> {
        const storedStatus = await db.status.get({id: 1})
        return storedStatus
      }).then(storedStatus => {
        setSavedStatus(storedStatus)
      })
    }
    getDataFromLocalDatabase()
  }, [])

  const handleMenuChange = buttonPressed => {

    switch (buttonPressed) {
      case menuList.mainMenu.firstButton:
        setCurrentMenu(menuList.joinMenu)
        break
      case menuList.mainMenu.secondButton:
        console.log(buttonPressed)
        break
      case menuList.joinMenu.firstButton:
        console.log("Let's joina game!")
        break
      case menuList.joinMenu.secondButton:
        const continueDisabled = !savedStatus.continue
        setCurrentMenu({...menuList.continueMenu, firstButtonDisabled: continueDisabled})
        console.log('Lets Go Offline!')
        break
      case menuList.continueMenu.firstButton:
        console.log("Continue")
        break
      case menuList.continueMenu.secondButton:
        console.log("Select a covenant")
        break
      default:
        console.log("You pressed an unforseen button. You pressed: " + buttonPressed)
    }
  }

  return (
    <div className="main-content" style={{marginTop:"10rem"}}>
      <DualButtonCard 
        title={currentMenu.title}
        firstLink={currentMenu.firstLink}
        firstButton={currentMenu.firstButton}
        firstButtonDisabled={currentMenu.firstButtonDisabled}
        secondLink={currentMenu.secondLink}
        secondButton={currentMenu.secondButton}
        secondButtonDisabled={currentMenu.secondButtonDisabled}
        handleMenuChange={handleMenuChange}
        />
    </div>
  )
}
export default App