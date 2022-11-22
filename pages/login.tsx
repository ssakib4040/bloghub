import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";

import useUser from "../lib/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/auth/login", { email, password });

      if (!email || !password) {
        toast.error("Please fill in all fields");
      }

      toast.success("Login successful");

      setEmail("");
      setPassword("");

      mutateUser(
        await fetch("/api/auth/user").then((res) => res.json()),
        false
      );
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <Container className="mx-auto d-flex align-items-center d-flex justify-content-center p-5">
      <div className="border p-3" style={{ minWidth: "350px" }}>
        <h1 className="text-center">Login</h1>
        <label htmlFor="Email">Email address</label>
        <input
          type="email"
          name=""
          id=""
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="form-control mb-3"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mb-3">
          <Button variant="dark" onClick={handleLogin}>
            Log In
          </Button>
        </div>
        Now registered yet?{" "}
        <Link href="/register" className="text-decoration-none">
          Register{" "}
        </Link>
      </div>
    </Container>
  );
}
