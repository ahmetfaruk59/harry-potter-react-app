import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../assets/images/notfound.gif'
const NotFound = () => {
  return (
    <div className='notfound d-flex'>
      <h4>404</h4>
      <hr />
      <p>PAGE NOT FOUND</p>
      <img src={notFound} alt="not found" />
      <Link to='/'>Back to home <span>→</span></Link>
    </div>
  )
}

export default NotFound