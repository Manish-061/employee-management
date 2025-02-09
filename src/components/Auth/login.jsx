import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border-2 rounded-2xl border-emerald-600 p-10 sm:p-16 shadow-lg bg-gray-800">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
        <form 
           onSubmit={(e)=>{
            submitHandler(e)
        }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className="w-full outline-none bg-gray-700 text-white border-2 border-emerald-500 font-medium text-lg py-3 px-5 rounded-lg placeholder:text-gray-400 focus:border-emerald-400 transition-all duration-300"
            type="email"
            placeholder="Enter your email"
          />
          <input
             value={password}
             onChange={(e)=>{
                 setPassword(e.target.value)
             }}
            required
            className="w-full outline-none bg-gray-700 text-white border-2 border-emerald-500 font-medium text-lg py-3 px-5 rounded-lg mt-4 placeholder:text-gray-400 focus:border-emerald-400 transition-all duration-300"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="mt-6 w-full text-white font-semibold bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 text-lg py-3 px-8 rounded-lg shadow-md hover:shadow-xl"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
