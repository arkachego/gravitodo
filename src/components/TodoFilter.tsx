// Libraries
import { Card, SegmentedControl, Stack, Text } from "@mantine/core";

// Constants
import TODO_FILTER from "../constants/todo-filter";

type Props = {
  value: string,
  onChange: (value: string) => void,
};

const TodoFilter: React.FC<Props> = ({ value, onChange }) => {

  return (
    <div style={{ width: 150, flexShrink: 0 }}>
      <Card
        withBorder={true}
        radius="lg"
        shadow="md"
      >
        <Card.Section>
          <Stack w='100%' gap={0} align="center">
            <Text size="sm" pt={5} pb={6}>Completion Status</Text>
            <SegmentedControl
              style={{ width: '100%' }}
              orientation="vertical"
              withItemsBorders={false}
              size="xs"
              radius="lg"
              value={value}
              data={[TODO_FILTER.SHOW_ALL, TODO_FILTER.COMPLETED, TODO_FILTER.PENDING]}
              onChange={onChange}
            />
          </Stack>
        </Card.Section>
      </Card>
    </div>
  );

};

export default TodoFilter;
