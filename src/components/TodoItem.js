import styles from 'styles/TodoItem.module.css';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { itemProp, handleChange, delTodo } = props;
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </div>

    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
