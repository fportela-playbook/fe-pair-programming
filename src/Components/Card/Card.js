import React from 'react'
import "./Card.css"

export default function Card({target,progress, name,bankname}) {

  

  const currentprogress =(Math.round((progress/target)*100)) 
  return (
    <div className='card'>
      <div className="goalname">{name}</div>
      <div className="progresstarget">
        <div className="target">
          Target: ${target}
        </div>
        <div className="progress">
          Progress: ${progress}
        </div>
      </div>
      <div className="bankdetials">
        <div className="banktitle">Recieving Account</div>
      <div className='bankname'>{bankname?bankname:'N/A'}</div>
      </div>
      <div className="currentprogress">
        Progress: {currentprogress}%
      </div>
    </div>
  )
}
