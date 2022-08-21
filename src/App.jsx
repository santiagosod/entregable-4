import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import { get } from './utils/services'

function App() {
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    get('users/')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }, [])

  const getAllUsers = () => {
    get('users/')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <div className="App">
      <Header setMenu={setMenu} menu={menu}/>

      <div className={menu ? 'users-form' : 'users-form none'}>
        <div className="close-menu">
            <button onClick={closeMenu} className='close-btn'><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
        <UsersForm getAllUsers={getAllUsers} updateInfo={updateInfo} setUpdateInfo={setUpdateInfo} setMenu={setMenu}/>
      </div>

      <div className="users-list">
        {
          users?.map(user => (
            <UsersList
              key={user.id} 
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
              setMenu={setMenu}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
