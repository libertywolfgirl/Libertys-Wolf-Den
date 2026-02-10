import { Paper, Title } from "@mantine/core";
import classes from "./DescriptionBubble.module.css";

const DescriptionBubble = ({ description }: { description: string }) => {
  return (
    <Paper
      w="fit-content"
      mx="auto"
      p="xl"
      style={{ borderRadius: 50 }}
      className={classes.container}
    >
      <Title order={6} ta="center">
        {description}
      </Title>
    </Paper>
  );
};

export default DescriptionBubble;
