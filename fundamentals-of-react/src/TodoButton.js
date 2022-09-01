import React from 'react';
import './TodoButton.css';

function TodoButton(props) {
    const onClickButton = (msg) => {
        alert(msg)
    };

  return (
    <button 
        className="CreateTodoButton"
        onClick={() => onClickButton('Aqui debería abrir un modal')}
    >
        +
    </button>
  );
}

export { TodoButton };