
import { TodoList, TodoAdd } from "./index";
import { useTodo } from "../hooks";

 
 export const TodoApp = () => {
  
   const { handleDeleteTodo, handleNewTodo, handleToggleTodo, todos, pendingTodosCount, todosCount } = useTodo();

    return (
     <>
        <h1>TodoApp: { todosCount }, <small>Pendientes: { pendingTodosCount } </small></h1>
        <hr /> 

        <div className="row">
             <div className="col-7">
                < TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo }
                    onToggleTodo={ handleToggleTodo }
                />
             </div>
               
              <div className="col-5">
                  <h4>Agregar TODO</h4>
                  <hr />
                    <TodoAdd 
                        onNewTodo={ handleNewTodo }
                    />
              </div>

        </div>

        

     </>
   )
 }
