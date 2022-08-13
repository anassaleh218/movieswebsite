import React from 'react'

import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <div class="nav">
          <div class="nleft">logo</div>
          <div class="nright">
            <Link to="/" className='link' >Home</Link>
            <Link to="/favlist" className='link'>Favourite List</Link>
            <Link to="/login" className='link'>Login</Link>
          </div>
     </div>
  )
}
