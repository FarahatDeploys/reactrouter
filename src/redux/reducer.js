import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",

  initialState,

  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeToDo: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    updateToDo: (state, action) => {
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            item: action.payload.item,
          };
        }
        return el;
      });
    },
    changeDisableprop: (state, action) => {
      return state.map((el) => {
        if (el.id.toString() === action.payload.id.toString()) {
          console.log({ ...el });
          console.log("The Element Should Be overwritten");
          return {
            ...el,
            disbledprop: false,
          };
        }
        console.log("The Element won't be overwritten");
        return { ...el };
      });
    },
    saveYourChanges: (state, action) => {
      return state.map((el) => {
        if (el.id.toString() === action.payload.id.toString()) {
          return {
            ...el,
            item: action.payload.item,
            disbledprop: true,
          };
        }
        return el;
      });
    },
    markAsCompleted: (state, action) => {
      return state.map((el) => {
        if (el.id.toString() === action.payload.id.toString()) {
          return {
            ...el,
            completed: true,
          };
        }
        return el;
      });
    },
  },
});

export const {
  addTodos,
  removeToDo,
  updateToDo,
  changeDisableprop,
  saveYourChanges,
  markAsCompleted,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
