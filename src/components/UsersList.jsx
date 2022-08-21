import React from 'react'
import { remove } from '../utils/services'

const UsersList = ({user, getAllUsers, setUpdateInfo, setMenu}) => {

    const deleteUser = id => {
        remove(`users/${id}/`)
        .then(res => getAllUsers())
        .catch(err => console.log(err))
    }

    const updateInfo = () => {
        setUpdateInfo(user)
        setMenu(true)
    }

  return (
    <article className='card'>
        <div className="name">
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
        </div>

        <div className="card-descr">
            <ul className='card-list'>
                <li><span className='subtitle'>Email: </span><br />{user.email}</li>
                <li><span className='subtitle'>Birthday: </span><br />{user.birthday}</li>
            </ul>
        </div>

        <div className="btns">
            <button onClick={() => deleteUser(user.id)} className='btn-dlt'><i className="fa-solid fa-trash"></i></button>
            <button onClick={updateInfo} className='btn-updt'><i className="fa-solid fa-pencil"></i></button>
        </div>
    </article>
  )
}

export default UsersList