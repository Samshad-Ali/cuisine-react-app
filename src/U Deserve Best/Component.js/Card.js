import React from 'react'

const Card = ({heading,desc,img}) => {
  return (
      <div className='card'>
          <div className='image'><img src={img} /></div>
          <h3>{heading}</h3>
            <p> {desc} </p>
    </div>
  )
}

export default Card