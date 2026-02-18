import { Paper, Title } from "@mantine/core";
import classes from "./DescriptionBubble.module.css";

const DescriptionBubble = ({ description }: { description: string }) => {
  return (
    <Paper
      w="fit-content"
      mx="auto"
      p={{ base: "1.5rem", sm: "3rem" }}
      style={{ borderRadius: 100 }}
      className={classes.container}
    >
      <Title order={5} ta="center">
        {description}
      </Title>
    </Paper>
  );
};

export default DescriptionBubble;
