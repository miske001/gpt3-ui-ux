import React from 'react'
import './brand.css'
import images from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      {images.map((img) => {
        return (
          <div>
            <img src={img} alt="image" />
          </div>
        )
      })}
    </div>
  )
}

export default Brand