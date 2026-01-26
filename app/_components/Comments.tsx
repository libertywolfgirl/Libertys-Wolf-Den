import { Stack, Text, Title, Paper, Group } from "@mantine/core";

type CommentType = {
  _id: string;
  name: string;
  text: string;
  _createdAt: string;
};

const Comments = ({ comments }: { comments: CommentType[] }) => {
  return (
    <Stack my={{ base: "2rem", sm: "3rem", lg: "4rem" }} gap="2rem">
      <Title order={4} ta="center" mb={{ base: 0, md: "0.5rem" }}>
        Comments
      </Title>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <Paper key={comment._id} p="1rem" withBorder>
            <Group
              justify="space-between"
              pb="1rem"
              style={{
                borderBottom: "1px solid #eee",
              }}
            >
              <Text fw={500}>{comment.name}</Text>
              <Text fw={300}>
                {new Date(comment._createdAt).toLocaleString()}
              </Text>
            </Group>
            <Text pt="1rem">{comment.text}</Text>
          </Paper>
        ))
      ) : (
        <Text ta="center">No comments yet.</Text>
      )}
    </Stack>
  );
};

export default Comments;
