import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
      {/* New Task */}
      <div className="rounded-xl py-6 px-9 bg-blue-500 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold">1</h2>
        <h3 className="text-lg font-medium mt-1">New Task</h3>
      </div>

      {/* Completed Task */}
      <div className="rounded-xl py-6 px-9 bg-green-500 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold">2</h2>
        <h3 className="text-lg font-medium mt-1">Completed Task</h3>
      </div>

      {/* Accepted Task */}
      <div className="rounded-xl py-6 px-9 bg-yellow-500 text-black shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold">3</h2>
        <h3 className="text-lg font-medium mt-1">Accepted Task</h3>
      </div>

      {/* Failed Task */}
      <div className="rounded-xl py-6 px-9 bg-red-500 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold">4</h2>
        <h3 className="text-lg font-medium mt-1">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
