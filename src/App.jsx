import React, { useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) =>{
    console.log(email, password);
    
  }


  return (
    <> 
        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {/* <EmployeeDashboard /> */}
        {/* <AdminDashboard /> */}
    </>
  )
}

export default App