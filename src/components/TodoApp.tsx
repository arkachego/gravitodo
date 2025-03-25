// Libraries
import { useEffect, useState } from "react";
import { Box, Container, Flex, Stack } from "@mantine/core";

// Components
import TodoFilter from "./TodoFilter";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

// Constants
import TODO_FILTER from "../constants/todo-filter";

// Types
import TodoItemType from "../types/TodoItemType";

// Hooks
import useTodoStore from "../hooks/useTodoStore";

const TodoApp: React.FC = () => {

  const { todoList, createItem, toggleItem, deleteItems } = useTodoStore();
  const [ filteredList, setFilteredList ] = useState<TodoItemType[]>([]);
  const [ filterValue, setFilterValue ] = useState<string>(TODO_FILTER.SHOW_ALL);

  useEffect(() => {
    let newFilteredList = [];
    if (filterValue === TODO_FILTER.SHOW_ALL) {
      newFilteredList = [ ...todoList ];
    }
    else {
      newFilteredList = todoList.filter(item => filterValue === TODO_FILTER.COMPLETED ? item.done : !item.done);
    }
    setFilteredList(newFilteredList);
  }, [ todoList, filterValue ]);

  return (
    <Box w='100%' h='100%' style={{ overflow: 'hidden auto' }}>
      <Container py='xl'>
        <Stack gap='md'>
          <Flex gap="md">
            <div style={{ flexGrow: 1 }}>
              <AddTodo
                createItem={createItem}
              />
            </div>
            {todoList.length ? (
              <TodoFilter
                value={filterValue}
                onChange={setFilterValue}
              />
            ) : null}
          </Flex>
          <TodoList
            todoList={filteredList}
            toggleItem={toggleItem}
            deleteItems={deleteItems}
          />
        </Stack>
      </Container>
    </Box>
  );

};

export default TodoApp;
