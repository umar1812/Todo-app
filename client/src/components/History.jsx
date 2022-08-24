import React from 'react'
import { useState } from 'react';
import Activity from './Activity'
import Content from './Content';


const History = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    };
    return (
        <div>
            <h1>User name</h1>
            <div>
                <span></span>
                <span>
                    <button onClick={handleClick}>Add new activity</button>
                    <table>
                        <thead>
                            <td>Activity</td>
                            <td>Status</td>
                            <td>Time taken <br /> (Hrs:Min:Sec) </td>
                            <td>Action</td>
                        </thead>
                        <Content />
                    </table>
                </span>
            </div>

            {isShown && (
                <Activity />
            )}
        </div>
    )
}

export default History