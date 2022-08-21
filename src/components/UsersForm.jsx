import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { patch, post } from '../utils/services'

const defaultValue = {
    birthday: '',
    email: '',
    first_name: '',
    last_name: '',
    password: ''
}

const UsersForm = ({getAllUsers, updateInfo, setUpdateInfo, setMenu}) => {
    const [type, settype] = useState('password')

    const {register, reset, handleSubmit} = useForm()

    useEffect(() => {
        if(updateInfo){
            reset(updateInfo)
        }
    }, [updateInfo])

    const createUser = data => {
        post('users/', data)
        .then(res => getAllUsers())
        .catch(err => console.log(err))
    }

    const updateUser = data => {
        patch(`users/${updateInfo.id}/`, data)
        .then(res => getAllUsers())
        .catch(err => console.log(err))
    }

    const submit = data => {
        if(updateInfo){
            updateUser(data)
            setUpdateInfo()
        } else {
            createUser(data)
            
        }
        reset(defaultValue)
        setMenu(false)
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <div className="form-title">
            <h1>{updateInfo ? 'Update User' : 'New User'}</h1>
        </div>

        <div className="form-descr">
            <ul className='form-list'>
                <li className='list'>
                    <label htmlFor="names"><i className="fa-solid fa-user"></i></label>
                    <div className="inputs input">
                        <input {...register('first_name')} type="text" id='first-name' placeholder='First Name'/>
                        <input {...register('last_name')} type="text" id='last-name' placeholder='Last Name'/>
                    </div>
                </li>

                <li className='list'>
                    <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                    <div className="input">
                        <input {...register('email')} type="text" id='email' placeholder='Email'/>
                    </div>
                </li>

                <li className='list'>
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                    <div className="input">
                        <input {...register('password')} type="password" id='password' placeholder='Password'/>
                    </div>
                </li>

                <li className='list'>
                    <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
                    <div className="input">
                        <input {...register('birthday')} type="date" id='birthday'/>
                    </div>
                </li>
            </ul>
        </div>

        <div className="form-btns">
            <button className='create-btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </div>
    </form>
  )
}

export default UsersForm