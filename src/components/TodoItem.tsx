function TodoItem({ todoItem, toggleComplete, deleteTodo }) {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-sm rounded-md p-4 mb-3">
        <div
          style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}
          className={`flex gap-2 py-2 cursor-pointer ${
            todoItem.completed ? 'text-gray-500' : 'text-black'
          }`}
          onClick={() => toggleComplete(todoItem.id)}  // Pass the ID on click
        >
          {todoItem.task}
        </div>
        
        <button
          onClick={() => deleteTodo(todoItem.id)}  // Pass the ID on click
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-sm ml-4 transition ease-in-out duration-300"
        >
          Delete
        </button>
      </div>
    );
  }
  
  export default TodoItem;
  