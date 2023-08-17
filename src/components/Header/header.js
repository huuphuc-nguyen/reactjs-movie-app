import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../assets/account.png'
import '../../common/color.css'
import './header.css'

const header = () => {
  return (
    <div className='header secondary-color'>
      <Link to='/'>
        <div className='logo font-primary'>MoviesMe</div>
      </Link>
      <div className='user-image'>
        <img src={userImg} alt='user'/>
      </div>
    </div>
  )
}

export default header
