// Libaries
import { Checkbox, Flex, Switch, Table, Text } from "@mantine/core";

// Types
import TodoItemType from "../types/TodoItemType";
import MutationType from "../types/MutationType";

type Props = {
  item: TodoItemType,
  checked: boolean,
  checkItem: MutationType,
  toggleItem: MutationType,
};

const TodoItem: React.FC<Props> = ({ item, checked, checkItem, toggleItem }) => {

  return (
    <Table.Tr
      key={item.id}
      bg={checked ? 'var(--mantine-primary-color-1)' : undefined}
    >
      <Table.Td>
        <Checkbox
          ml={4}
          aria-label="Select row"
          checked={checked}
          onChange={() => checkItem(item)}
        />
      </Table.Td>
      <Table.Td>
        <Text td={item.done ? "line-through" : ''}>{item.todo}</Text>
      </Table.Td>
      <Table.Td>
        <Flex justify="center">
          <Switch
            size="md"
            checked={item.done}
            onLabel="Yes"
            offLabel="No"
            onChange={() => toggleItem(item)}
          />
        </Flex>
      </Table.Td>
    </Table.Tr>
  );

};

export default TodoItem;
