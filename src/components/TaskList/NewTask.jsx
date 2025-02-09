import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-green-500 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Category & Date */}
      <div className="flex justify-between items-center">
        <h3 className="bg-gray-900 text-white text-xs px-4 py-1 rounded-full font-medium">
          {data.category}
        </h3>
        <h4 className="text-xs text-gray-800 font-medium">{data.taskDate}</h4>
      </div>

      {/* Task Title */}
      <h2 className="mt-4 text-xl font-semibold text-white">{data.taskTitle}</h2>

      {/* Task Description */}
      <p className="text-sm text-gray-100 mt-2 leading-relaxed">{data.taskDescription}</p>

      {/* Accept Task Button */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium py-2 px-3 text-sm transition-all duration-200">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
