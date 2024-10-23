import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(){
    const [taskList,updateTaskList] = useState([])

   function newTask(task:any){
     console.log("New task created from app: ", task);  // Log the new task when created
     const newTodo = {
        id: Date.now(), // generate unique ID
        task,
        completed: false
      };
      updateTaskList([...taskList, newTodo]);  // Add the new task to the taskList state variable
   }

   function deleteTodo(id){
    updateTaskList(
        taskList.filter((task)=>{
            return task.id!==id;  // Keep only the tasks that don't match the id
        })
    )
   }


   function toggleCompletion(id) {
    updateTaskList(
      taskList.map((tsk) => {
        if (tsk.id === id) {
          return { ...tsk, completed: !tsk.completed };  // Toggle the completion state
        }
        return tsk;
      })
    );
  }

    return(
  <>
   <TodoForm createTask={newTask} />
   <TodoList todoList={taskList} deleteTodo={deleteTodo} toggleComplete={toggleCompletion} ></TodoList>

  </>
 )
}
export default App;