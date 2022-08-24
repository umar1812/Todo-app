import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let disabled = true;
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");

    const user = {
        "name": name,
        "password": password
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await axios.post("http://localhost:5000/login", user, { withCredentials: true, credentials: 'include' })
            localStorage.setItem("user", res.data)
            navigate("/history")

        } catch (err) {
            window.alert("Invalid credentials")
        }

    }
    if (user.name !== "" && user.password !== "") {
        disabled = false
    }



    return (
        <div className='loginform'>
            <div className='log'>
                <h1>Member Login</h1>
                <br />
                <input type="text" placeholder='Username' name='name' onChange={e => setName(e.target.value)} />
                <br />
                <input type="password" placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
                <br />
                <button onClick={handleSubmit} disabled={disabled} className='signbtn'>LOGIN</button>
                <br />
                <p>Forgot password?</p>
                <br />
                <a href="/register">Sign up</a>
                <br />
            </div>
        </div>
    )
}

export default Login