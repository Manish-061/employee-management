import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    return (
        <div
            id="tasklist"
            className="h-auto max-h-[60vh] overflow-x-auto overflow-y-hidden flex items-center gap-6 flex-nowrap w-full py-3 mt-10 px-5 
                       scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"
        >
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />;
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />;
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />;
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />;
                }
                return null;
            })}
        </div>
    );
};

export default TaskList;