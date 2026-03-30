import { Paper, Title } from "@mantine/core";
import classes from "./DescriptionBubble.module.css";

const DescriptionBubble = ({ description }: { description: string }) => {
  return (
    <Paper className={classes.container}>
      <Title order={2} className={classes.description}>
        {description}
      </Title>
    </Paper>
  );
};

export default DescriptionBubble;
