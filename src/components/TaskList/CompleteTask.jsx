import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] p-6 bg-blue-500 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Category & Date */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white text-xs px-4 py-1 rounded-full font-medium">
          {data.category}
        </h3>
        <h4 className="text-xs text-gray-200">{data.taskDate}</h4>
      </div>

      {/* Task Title */}
      <h2 className="mt-4 text-xl font-semibold text-white">{data.taskTitle}</h2>

      {/* Task Description */}
      <p className="text-sm text-gray-200 mt-2 leading-relaxed">{data.taskDescription}</p>

      {/* Complete Button */}
      <div className="mt-6">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium py-2 px-3 text-sm transition-all duration-200">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
