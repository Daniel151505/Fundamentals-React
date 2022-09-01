import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { TodoButton} from "./TodoButton.js";
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Cortar Papaya', completed: false},
  { text: 'Comer comida', completed: false},

]

function App() {
  return (
    <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
        
      </TodoList>
      <TodoButton />      
 </react.Fragment>
  );
}

export default App;
