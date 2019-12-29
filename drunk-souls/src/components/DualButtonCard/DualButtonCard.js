import React from 'react';
import {Button} from 'react-bootstrap';


function DualButtonCard({
  title, firstLink, firstButton, secondLink, secondButton, handleMenuChange
}) {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <br/>
      <Button 
        href={firstLink} 
        onClick={() => handleMenuChange(firstButton)} 
        className="btn btn-secondary navbar-dark btn-end" block
      >{firstButton}</Button>
      <br/>
      <Button 
        href={secondLink} 
        onClick={() => handleMenuChange(secondButton)} 
        className="btn btn-secondary navbar-dark btn-end" block
      >{secondButton}</Button>
    </div>
  )
}

export default DualButtonCard;