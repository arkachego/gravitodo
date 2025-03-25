// Libraries
import { useEffect, useState } from "react";

// Constants
const TODO_LIST = "todo-list";

// Types
import TodoItemType from "../types/TodoItemType";
import MutationType from "../types/MutationType";

const useTodoStore = () => {

  const [ todoList, setTodoList ] = useState<TodoItemType[]>([]);

  useEffect(() => {
    const savedTodoListString: string | null = localStorage.getItem(TODO_LIST);
    let savedTodoList: TodoItemType[] = [];
    if (savedTodoListString) {
      savedTodoList = JSON.parse(savedTodoListString);
    }
    setTodoList(savedTodoList);
    setStorage(savedTodoList);
  }, []);

  const getIndex: (item: TodoItemType) => number = (item) => {
    return todoList.findIndex(i => i.id === item.id);
  };

  const setStorage: (items: TodoItemType[]) => void = (items) => {
    localStorage.setItem(TODO_LIST, JSON.stringify(items));
  };

  const createItem: MutationType = (item) => {
    const newTodoList = [ item, ...todoList ];
    setTodoList(newTodoList);
    setStorage(newTodoList);
  };

  const toggleItem: MutationType = (item) => {
    const itemIndex = getIndex(item);
    let newTodoList = [ ...todoList ];
    newTodoList[itemIndex].done = !newTodoList[itemIndex].done;
    setTodoList(newTodoList);
    setStorage(newTodoList);
  };

  const deleteItems: (ids: string[]) => void = (ids) => {
    const newTodoList = todoList.filter(
      item => !ids.includes(item.id),
    );
    setTodoList(newTodoList);
    setStorage(newTodoList);
  };

  return {
    todoList,
    createItem,
    toggleItem,
    deleteItems,
  };

};

export default useTodoStore;
