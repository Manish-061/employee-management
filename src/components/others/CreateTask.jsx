import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-6 bg-[#1c1c1c] mt-5 rounded-lg shadow-md">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Section - Task Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input 
              className="w-full text-sm py-2 px-3 rounded-md outline-none bg-[#2A2A2A] border border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 transition-all" 
              type="text" placeholder="Enter task title" 
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input 
              className="w-full text-sm py-2 px-3 rounded-md outline-none bg-[#2A2A2A] border border-gray-600 text-white focus:border-emerald-500 transition-all" 
              type="date" 
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input 
              className="w-full text-sm py-2 px-3 rounded-md outline-none bg-[#2A2A2A] border border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 transition-all" 
              type="text" placeholder="Enter employee name" 
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input 
              className="w-full text-sm py-2 px-3 rounded-md outline-none bg-[#2A2A2A] border border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 transition-all" 
              type="text" placeholder="Design, Development, etc." 
            />
          </div>
        </div>

        {/* Right Section - Task Description & Submit */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea 
              className="w-full h-40 text-sm py-2 px-3 rounded-md outline-none bg-[#2A2A2A] border border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 transition-all resize-none" 
              placeholder="Enter task details..."
            ></textarea>
          </div>

          <button 
            className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600 transition-all shadow-md">
            Create Task
          </button>
        </div>

      </form>
    </div>
  )
}

export default CreateTask
