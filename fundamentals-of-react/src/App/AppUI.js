import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoButton} from "../TodoButton/index.js";
import { TodoContext } from '../TodoContext';

function AppUI() {
    return(
        <React.Fragment>
            <TodoCounter/>    
            <TodoSearch/>

            <TodoContext.Consumer>
                {({
                    error, 
                    loading, 
                    searchedTodos, 
                    completeTodo, 
                    deleteTodo
                }) => (
                    <TodoList>
                    {error && <p>Hubo un error...</p>}
                    {loading && <p>Estamos cargando, no desesperes...</p>}
                    {(!loading && !searchedTodos.length) && <p>¡Crea tu primer todo!</p>}
                    {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>

            <TodoButton />      
         </React.Fragment>
    );
}

export {
    AppUI
};