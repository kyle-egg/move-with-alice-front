import React from 'react'
import { useLocation } from 'react-router-dom'
// import Image from '../../assets/images/JSSA-Logo-edit.png'

function Footer() {
  useLocation()

  return (
    <div className="blue">
      <div className="blue">
        <div className="footer uk-flex-between uk-flex uk-flex-between uk-flex-middle">
          <ul className="uk-navbar-nav">
            <li >
              <a className="uk-navbar-item uk-logo" href="/">
                <img className="footerlogo"></img>
              </a>
            </li>
          </ul>
          <p className="footertext">© 2024 Move With Alice. All Rights Reserved.</p>
        </div>
        <div className="createdwrap">
          <p id="created" className="footertext"><a href='http://www.kyle-egg.co.uk/'>Website Created By Kyle-Egg</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer