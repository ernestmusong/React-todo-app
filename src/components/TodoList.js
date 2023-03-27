import { useState } from 'react';
import PropTypes from 'prop-types';

const todosData = [
  {
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: 3,
    title: 'Deploy to live server',
    completed: false,
  },
];

const TodosList = () => {
  const [todos, setTodos] = useState(todosData);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

const TodoItem = (props) => {
  const { itemProp, handleChange, delTodo } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}

    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodosList;
