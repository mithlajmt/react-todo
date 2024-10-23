import { useState } from "react";

function TodoForm({ createTask }) {
    const [task, setTask] = useState('');

    let handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    function onButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if (task.trim()) {
            createTask(task);  // Call the createTask function passed from App with the task
            setTask('');  // Optionally clear the input field after creating the task
        }
    }

    return (
        <div className="max-w-md mx-auto p-6">
            <div className="flex gap-3 items-center">
                <input
                    type="text"
                    className="flex-1 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
                    placeholder="Add a new task..."
                    value={task}
                    onInput={handleInput}
                />
                <button 
                    onClick={onButtonClick}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-sm font-medium"
                >
                    Create Todo
                </button>
            </div>
        </div>
    );
}

export default TodoForm;
