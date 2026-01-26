"use server";

import { revalidatePath } from "next/cache";
import { serverClient } from "./client";
import { Comment } from "../types";

export const createComment = async (commentData: Comment) => {
  const newComment = {
    _type: "comment",
    name: commentData.name,
    text: commentData.text,
    chapter: commentData.chapter,
  };

  try {
    await serverClient.create(newComment);

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Mutation failed:", error);
    const message = error instanceof Error ? error.message : String(error);
    return { success: false, error: message };
  }
};
