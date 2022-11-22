import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import useUser from "../lib/useUser";

function NavScrollExample() {
  const router = useRouter();
  const { user, mutateUser } = useUser();

  // console.log(user);

  const handleLogout = async () => {
    await mutateUser(
      fetch("/api/auth/logout", {
        method: "POST",
      })
    );
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="" fixed="top">
      <Container className="">
        <Navbar.Brand
          onClick={() => router.push("/")}
          className="cursor-pointer"
        >
          BlogHub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link onClick={() => router.push("/addnew")}>New Post</Nav.Link>
            <Nav.Link onClick={() => router.push("/about")}>About</Nav.Link>
            <Nav.Link onClick={() => router.push("/contact")}>Contact</Nav.Link>
          </Nav>

          {user?.isLoggedIn ? (
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button
              variant="outline-light"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
