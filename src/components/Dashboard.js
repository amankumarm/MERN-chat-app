import React from 'react'
import Sidebar from './molecules/sidebar'

function Dashboard({ id }) {
    return (
        <div clasName="d-flex" style={{height:'100vh'}}>
            <Sidebar id={id}/>
        </div>
    )
}

export default Dashboard
