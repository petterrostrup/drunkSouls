import React from 'react';
import {Button} from 'react-bootstrap';


function DualButtonCard({
  title, firstLink, firstButton, firstButtonDisabled, secondLink, secondButton, secondButtonDisabled, handleMenuChange
}) {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <br/>
      <Button 
        href={firstLink} 
        onClick={() => handleMenuChange(firstButton)} 
        className="btn btn-secondary navbar-dark btn-end" block disabled={firstButtonDisabled}
      >{firstButton}</Button>
      <br/>
      <Button 
        href={secondLink} 
        onClick={() => handleMenuChange(secondButton)} 
        className="btn btn-secondary navbar-dark btn-end" block disabled={secondButtonDisabled}
      >{secondButton}</Button>
    </div>
  )
}

export default DualButtonCard;