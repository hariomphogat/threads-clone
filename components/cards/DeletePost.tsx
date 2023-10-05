"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { deleteThread } from "../../lib/actions/thread.actions";

async function onDelete(threadId: string, path: string) {
  await deleteThread(threadId, path);
}

const DeletePost = ({ threadId, path }: { threadId: string; path: string }) => {
  return (
    <Button
      className="bg-transparent"
      onClick={() => {
        onDelete(threadId, path);
      }}
    >
      <Image
        src="/assets/delete.svg"
        alt="delete icon"
        height={20}
        width={20}
      />
    </Button>
  );
};

export default DeletePost;
