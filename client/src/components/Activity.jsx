import React, { useState } from 'react'

const Activity = () => {

    const [activity, setActivity] = useState({
        activity: "",
        status: '',
        time: 0,
        action: ""
    })

    const saveInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setActivity({ ...activity, [name]: value })
    }

    return (
        <div>
            <input type="text" placeholder='Name of the activity' name='activity' onChange={saveInput} />
            <button className='addact'>+</button>
        </div>
    )
}

export default Activity