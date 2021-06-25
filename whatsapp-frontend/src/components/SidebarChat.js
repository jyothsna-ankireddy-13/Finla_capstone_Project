import { Avatar } from '@material-ui/core'

import React, { useEffect, useState } from 'react'
import './SidebarChat.css'

function SidebarChat({ messages }) {
    const [seed, setSeed] = useState("") // to make it dynamic/random
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))  // to make it dynamic/random

    }, [])
    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Dev1</h2>
                <p>{messages[messages.length - 1]?.message}</p>
            </div>
        </div>
    )
}

export default SidebarChat
