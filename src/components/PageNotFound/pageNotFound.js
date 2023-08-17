import React from 'react'
import './pageNotFound.css'
import { ReactComponent as SVG } from '../../assets/404.svg'

const pageNotFound = () => {
  return (
    <div className='page404'>
      <SVG/>
    </div>
  )
}

export default pageNotFound
