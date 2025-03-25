// Libraries
import { useState } from 'react';
import { Table, Card, ActionIcon, Alert } from '@mantine/core';
import { IconInfoCircle, IconTrash } from '@tabler/icons-react';

// Components
import TodoItem from './TodoItem';

// Types
import TodoItemType from '../types/TodoItemType';
import MutationType from '../types/MutationType';

type Props = {
  todoList: TodoItemType[];
  toggleItem: MutationType;
  deleteItems: (ids: string[]) => void;
};

const TodoList: React.FC<Props> = ({ todoList, toggleItem, deleteItems }) => {

  const [ selectedIds, setSelectedIds ] = useState<string[]>([]);

  const checkItem: MutationType = (item) => {
    const selectedIndex: number = selectedIds.findIndex(id => id === item.id);
    let newSelectedIds: string[] = [];
    if (selectedIndex === -1) {
      newSelectedIds = [ ...selectedIds, item.id ];
    }
    else {
      newSelectedIds.splice(selectedIndex, 1);
    }
    setSelectedIds(newSelectedIds);
  };

  const removeItems: () => void = () => {
    deleteItems(selectedIds);
    setSelectedIds([]);
  };

  return (
    <Card withBorder={true} radius="lg" shadow="md">
      <Card.Section>
        {todoList.length ? (
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={50}>
                  <ActionIcon
                    mt={5}
                    variant="filled"
                    aria-label="Delete"
                    disabled={selectedIds.length === 0}
                    onClick={removeItems}
                  >
                    <IconTrash/>
                  </ActionIcon>
                </Table.Th>
                <Table.Th>Todo Details</Table.Th>
                <Table.Th w={86} style={{ textAlign: "center" }}>Completed</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {todoList.map(item => (
                <TodoItem
                  key={item.id}
                  item={item}
                  checked={selectedIds.includes(item.id || '')}
                  checkItem={checkItem}
                  toggleItem={toggleItem}
                />
              ))}
            </Table.Tbody>
          </Table>
        ) : (
          <Alert h={92} variant="light" color="blue" title="No todos found!" icon={<IconInfoCircle/>}>
            Please adjust your filter criteria or create a new todo above if your list is empty.
          </Alert>
        )}
      </Card.Section>
    </Card>
  );

};

export default TodoList;
