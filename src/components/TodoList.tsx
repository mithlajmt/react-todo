import TodoItem from "./TodoItem"

function TodoList({todoList,toggleComplete, deleteTodo}){
    console.log(todoList)
    return (
        <div className="">
            {
                todoList.map((todo)=>{
                    return(
                        <TodoItem
                        todoItem={todo}
                        key={todo.id}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        ></TodoItem>
                    )
                })
            }
        </div>
    )

}

export default TodoList