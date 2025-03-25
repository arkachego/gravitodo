// Libraries
import { useState } from "react";
import { Card, Kbd, TextInput } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

// Types
import MutationType from "../types/MutationType";

type Props = {
  createItem: MutationType,
};

const AddTodo: React.FC<Props> = ({ createItem }) => {

  const [ todo, setTodo ] = useState('');

  const onSubmit = () => {
    createItem({
      id: uuidv4(),
      todo,
      done: false,
    });
    setTodo('');
  };

  return (
    <Card
      withBorder={true}
      radius="lg"
      shadow="md"
    >
      <TextInput
        value={todo}
        withAsterisk={true}
        label="Add New Todo"
        placeholder="Upto 50 characters"
        maxLength={50}
        description={(
          <>
            Press
            <Kbd size="xs" mx={4}>Enter</Kbd>
            to save
          </>
        )}
        inputWrapperOrder={['label', 'input', 'description']}
        onChange={event => setTodo(event.currentTarget.value)}
        onKeyDown={event => event.key === "Enter" ? onSubmit() : null}
      />
    </Card>
  );

};

export default AddTodo;
