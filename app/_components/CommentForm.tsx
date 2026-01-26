"use client";

import { Button, Group, Text, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { createComment } from "../../sanity/lib/mutations";
import { Comment } from "../../sanity/types";
import { useState } from "react";
import { set } from "sanity";

const CommentForm = ({ id }: { id: string }) => {
  const [showForm, setShowForm] = useState(true);

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
    setShowForm(false);
  };

  return showForm ? (
    <form action={createCommentWithData}>
      <Title order={5} ta="center" mb={{ base: "0.5rem", md: "1rem" }}>
        Post a Comment
      </Title>
      <TextInput
        mb="1rem"
        withAsterisk
        label="Name"
        placeholder="enter a name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <Textarea
        mb={{ base: "1.5rem", sm: "2rem", lg: "2.5rem" }}
        withAsterisk
        autosize
        minRows={4}
        label="Comment"
        placeholder="enter your comment"
        key={form.key("text")}
        {...form.getInputProps("text")}
      />
      <Group justify="center">
        <Button type="submit" radius="xl" size="md">
          Submit
        </Button>
      </Group>
    </form>
  ) : (
    <Text ta="center" mb="1rem">
      Thank you for your comment!
    </Text>
  );
};

export default CommentForm;
