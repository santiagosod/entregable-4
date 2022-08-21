import React from 'react'

const Header = ({setMenu, menu}) => {

    const openMenu = () => {
        setMenu(true)
    }

  return (
    <header className='header'>
        <div className="header-content">
          <div className="header-title">
            <h1>USERS CRUD</h1>
          </div>

          <div className="header-menu">
            <button onClick={openMenu} className='header-btn'><i className="fa-solid fa-bars"></i></button>
          </div>
        </div>
      </header>
  )
}

export default Header