import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoButton} from "../TodoButton/index.js";
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {

    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter/>    
            <TodoSearch/>
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

                { !!openModal && (
                    <Modal>
                        <p>{searchedTodos[0]?.text}</p>
                    </Modal>
                )}

            <TodoButton 
                setOpenModal={setOpenModal}
            />      
         </React.Fragment>
    );
}

export {
    AppUI
};