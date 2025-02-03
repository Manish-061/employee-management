import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
        <CreateTask />

        {/* AllTask needed to be added when completed. */}
    </div>
    
  )
}

export default AdminDashboard