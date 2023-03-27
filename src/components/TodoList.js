import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import InputTodo from './InputTodo';

const todosData = [
  {
    id: uuidv4(),
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: uuidv4(),
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: uuidv4(),
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

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((item) => {
        const res = { ...item };
        if (item.id === id) {
          res.title = updatedTitle;
        }
        return res;
      }),
    );
  };

  return (
    <>
      <InputTodo addTodoItem={addTodoItem} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            itemProp={todo}
            handleChange={handleChange}
            delTodo={delTodo}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    </>
  );
};

export default TodosList;
