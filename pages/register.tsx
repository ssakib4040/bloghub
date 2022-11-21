import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export default function Register() {
  return (
    <Container className="mx-auto d-flex align-items-center d-flex justify-content-center p-5">
      <div className="border p-3" style={{ minWidth: "350px" }}>
        <h1 className="text-center">Register</h1>
        <label htmlFor="Email">Email address</label>
        <input type="email" name="" id="" className="form-control" />
        <label htmlFor="">Password</label>
        <input type="password" className="form-control mb-3" name="" id="" />
        <div className="mb-3">
          <Button variant="dark">Register</Button>
        </div>
        Already Registered?{" "}
        <Link href="/login" className="text-decoration-none">
          Login{" "}
        </Link>
      </div>
    </Container>
  );
}
