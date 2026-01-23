"use client";

import { Button, Group, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { createComment } from "../../sanity/lib/mutations";
import { Comment } from "../../sanity/types";

const CommentForm = ({ id }: { id: string }) => {
  const form = useForm({
    initialValues: {
      name: "",
      text: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      text: (value) =>
        value.length < 2 ? "Comment must have at least 2 letters" : null,
    },
  });

  const commentData = {
    name: form.values.name,
    text: form.values.text,
    chapter: { _type: "reference", _ref: id },
  };

  const createCommentWithData = async () => {
    await createComment(commentData as Comment);
  };

  return (
    <form action={createCommentWithData}>
      <Title order={4} ta="center" mt="lg">
        Post a Comment
      </Title>
      <TextInput
        mt="xs"
        withAsterisk
        label="Name"
        placeholder="enter a name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <Textarea
        mt="sm"
        withAsterisk
        autosize
        minRows={4}
        label="Comment"
        placeholder="enter your comment"
        key={form.key("text")}
        {...form.getInputProps("text")}
      />
      <Group justify="center" mt="md">
        <Button type="submit" radius="xl" size="md">
          Submit
        </Button>
      </Group>
    </form>
  );
};

export default CommentForm;
