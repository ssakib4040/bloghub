import Link from "next/link";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Button, Container } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import { validateEmail } from "../lib/utils";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleRegister = async () => {
    if (!email || !password) {
      toast.error("Fields are required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email");
      return;
    }

    try {
      const { data } = await axios.post("/api/auth/register", {
        email,
        password,
      });

      toast.success("Registration successful");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <Container className="mx-auto d-flex align-items-center d-flex justify-content-center p-5">
      <div className="border p-3" style={{ minWidth: "350px" }}>
        <h1 className="text-center">Register</h1>
        <label htmlFor="Email">Email address</label>
        <input
          type="email"
          name=""
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="form-control mb-3"
          name=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mb-3">
          <Button variant="dark" onClick={handleRegister}>
            Register
          </Button>
        </div>
        Already Registered?{" "}
        <Link href="/login" className="text-decoration-none">
          Login{" "}
        </Link>
      </div>
    </Container>
  );
}
