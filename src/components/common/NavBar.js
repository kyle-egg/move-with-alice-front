import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { isAuthenticated, removeToken } from '../../lib/auth'
// import Pdf from '../../assets/documents/JSSAConstitution.pdf'
// import Image from '../../assets/images/JSSA-Logo-edit.png'

function NavBar() {
  // useLocation()
  // const navigate = useNavigate()
  // const isAuth = isAuthenticated()

  // const handleLogout = () => {
  //   removeToken()
  //   navigate('/')
  // }

  return (
    <nav className="uk-navbar-container uk-margin" id='navbar'>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a className="uk-navbar-item uk-logo" href="/">
              <img className="logo"></img>
            </a>
          </li>
          <li className="navtext uk-visible@l"><a id="navtext" href="/">Home</a></li>
          <li className="navtext uk-visible@l"><a id="navtext" href="/exercises">Exercises</a></li>
        </ul>
      </div>
      {/* <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          {isAuth && (
            <li className="navtext"><a id="navtext" href="/teamcenter">Profile</a></li>
          )}
          {!isAuth && (
            <>
              <li className="navtext"><a id="navtext" href="/login">Log In</a></li>
            </>
          )}
          {isAuth && (
            <li className="navtext"><a id="navtext" onClick={handleLogout}>Log Out</a></li>
          )}
          <li className="uk-hidden@l">
            <img id="hamburger" src="https://img.icons8.com/ios/50/000000/menu--v4.png" className="uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary"/>            </li>
        </ul>
      </div> */}
    </nav>

  )
}

export default NavBar