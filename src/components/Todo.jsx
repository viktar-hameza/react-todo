import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Button from './Button';

function Todo(props) {
  function handleChange() {
    props.onStatusChange(props.id);
  }
  return (
    <div className={`todo${props.completed ? ' completed' : '' }`}>
      <Checkbox checked={props.completed} onChange={handleChange} />
      <span className="todo-title">{props.title}</span>
      <Button className="delete icon" icon="delete" onClick={() => props.onDelete(props.id)}/> 
    </div>
  );
};
Todo.propTypes = {
  title: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;