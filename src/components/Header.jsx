import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
      <div className="containers">
        <div className="logo">
         <img src={Logo} alt="Blog Logo"/>
        </div>
        <div className="links">
          <Link className="link" to="/?cart=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cart=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cart=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cart=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cart=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cart=food">
            <h6>FOOD</h6>
          </Link>
          <span>Rufus</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header