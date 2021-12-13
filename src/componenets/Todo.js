import React, { useState } from "react";
import { connect } from "react-redux";

import {
  addTodos,
  removeToDo,
  changeDisableprop,
  saveYourChanges,
  markAsCompleted,
} from "../redux/reducer";
import { useRef } from "react";

const mapStateToProps = (state) => {
  return { todo: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodoProp: (obj) => dispatch(addTodos(obj)),
    removeToDo: (obj) => dispatch(removeToDo(obj)),
    changeDisablepropa: (obj) => dispatch(changeDisableprop(obj)),
    saveYourChangesa: (obj) => dispatch(saveYourChanges(obj)),
    markAsCompleteda: (obj) => dispatch(markAsCompleted(obj)),
  };
};
const Todos = (props) => {
  //   const inputRef = useRef(true);
  const [todo, setTodo] = useState("");
  //   const changeFocus = () => {
  //     inputRef.current.disabled = false;
  //     inputRef.current.focus();
  //   };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handledelete = (el) => {
    props.removeToDo(el);
  };
  const handleEdit = (el) => {
    props.changeDisablepropa(el);
    console.log(props);
  };
  const handleSaveChanges = (el) => {
    props.saveYourChangesa(el);
  };
  const handleMarkAsCompleted = (el) => {
    props.markAsCompleteda(el);
  };
  const submitChanges = () => {
    props.addTodoProp({
      id: Math.floor(Math.random() * 1000),
      item: todo,
      completed: false,
      disbledprop: true,
    });
  };
  console.log(props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <button className="add-btn" onClick={() => submitChanges()}>
        Add
      </button>
      <br />
      <div className="TodoListRedndered">
        {props.todo.map((el) => (
          <div key={el.id}>
            <textarea
              disabled={el.disbledprop}
              defaultValue={el.item}
              cols="20"
              rows="5"
            ></textarea>
            <button onClick={() => handledelete(el)}>Delete</button>
            <button onClick={() => handleEdit(el)}>Edit</button>
            <button onClick={() => handleSaveChanges(el)}>
              Save Your Changes
            </button>
            <button onClick={() => handleMarkAsCompleted(el)}>
              Mark This Task As Completed
            </button>
            {/* never but any thing in () for a callback function ... this will make the function think that this is the event and you abbreviated it by e*/}
          </div>
        ))}
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
