"use client";

import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

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

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="enter a name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <Textarea
        mt="sm"
        withAsterisk
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
