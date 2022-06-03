import React from 'react'

import { useNavigate } from 'react-router-dom'
export default function DashBoard() {
const navigate=useNavigate()
    return (
    <div><h1>DashBoard Page</h1>
    <button onClick={()=>navigate('/post')}>Post</button>
    <button onClick={()=>navigate('/todos')}>Todo</button>
    </div>
  )
}

// export default DashBoard