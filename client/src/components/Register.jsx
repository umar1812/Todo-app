import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let disabled = true
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        password: ''
    });
    const [pass, setpass] = useState()

    const saveInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const submit = async (e) => {
        if (user.password !== pass) {
            window.alert("Passwords do not match")
        } else {
            try {
                e.preventDefault();
                const res = await axios.post("http://localhost:5000/register", user)
                if (res.status === 201) {
                    navigate('/')
                } else {
                    window.alert("User already exists")
                }
            } catch (error) {
                window.alert("User already exists")
            }

        }
    }

    if (user.name !== "" && user.password !== "" && pass !== "") {
        disabled = false
    }

    return (
        <div className='loginform'>
            <div className='log'>
                <h1>Register</h1>
                <br />
                <input type="text" placeholder='Username' name='name' onChange={saveInput} />
                <br />
                <input type="password" placeholder='Password' name='password' onChange={saveInput} />
                <br />
                <input type="password" placeholder='Confirm password' onChange={(e) => setpass(e.target.value)} />
                <br />
                <button onClick={submit} className='signbtn' disabled={disabled}>Register</button>
                <br />
                <a href="/">Member Login</a>
                <br />
            </div>
        </div>
    )
}

export default Register