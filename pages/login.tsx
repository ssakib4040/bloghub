import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";

export default function Login() {
  return (
    <Container className="mx-auto d-flex align-items-center d-flex justify-content-center p-5">
      <div className="border p-3" style={{ minWidth: "350px" }}>
        <h1 className="text-center">Login</h1>
        <label htmlFor="Email">Email address</label>
        <input type="email" name="" id="" className="form-control mb-3" />
        <label htmlFor="">Password</label>
        <input type="password" className="form-control mb-3" name="" id="" />
        <div className="mb-3">
          <Button variant="dark">Log In</Button>
        </div>
        Now registered yet?{" "}
        <Link href="/register" className="text-decoration-none">
          Register{" "}
        </Link>
      </div>
    </Container>
  );
}
