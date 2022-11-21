import React from "react";
import { Button, Container } from "react-bootstrap";

export default function Addnew() {
  return (
    <Container>
      <h1>Add new post</h1>
      <label htmlFor="">Title</label>
      <input
        type="text"
        placeholder="Enter your title"
        className="form-control mb-3"
      />

      <label htmlFor="">Post Content</label>
      <textarea
        name=""
        id=""
        cols={10}
        className="form-control mb-3"
        placeholder="Enter your post content"
      ></textarea>
      <div>
        <Button variant="dark" className="mb-3">
          Add new post
        </Button>
      </div>
    </Container>
  );
}
