import React from 'react'
import './Singlecard.css'

export default function Singlecard({card, handleChoice}) {


const handleClick = ()=>{

    handleChoice(card)
}


  return (

   
 
        <div className='card' key={card.id}>

        <div>
        <img className=''front src={card.src} alt='card front'></img>
        <img className='back' src='/img/cover.png' alt='card back' onClick={handleClick} />
        </div>

     </div>
  

   
  
  )
}
