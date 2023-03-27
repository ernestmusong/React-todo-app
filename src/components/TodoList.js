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
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};

const TodoItem = (props) => {
  const { itemProp, handleChange } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      {itemProp.title}
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TodosList;
