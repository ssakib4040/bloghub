import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

export default function Addnew() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNewPost = async () => {
    if (!title || !content) {
      toast.error("Fields are required");
      return;
    }

    try {
      const { data } = await axios.post(`/api/posts/create`, {
        title,
        content,
      });

      toast.success("Post created successfully");
      setTitle("");
      setContent("");
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <Container>
      <h1>Add new post</h1>
      <label htmlFor="">Title</label>
      <input
        type="text"
        placeholder="Enter your title"
        className="form-control mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="">Post Content</label>
      <textarea
        name=""
        id=""
        rows={10}
        className="form-control mb-3"
        placeholder="Enter your post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div>
        <Button variant="dark" className="mb-3" onClick={addNewPost}>
          Add new post
        </Button>
      </div>
    </Container>
  );
}
