import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="">
      <Row className="">
        <Col className="" md="12">
          {/* Posts  */}

          <div className="border cursor-pointer p-2 mb-3">
            <h4>Post title number 1</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              tempora minus molestias expedita vitae recusandae cum, ad beatae
              quis delectus!
            </p>
          </div>

          <div className="border cursor-pointer p-2 mb-3">
            <h4>Post title number 1</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              tempora minus molestias expedita vitae recusandae cum, ad beatae
              quis delectus!
            </p>
          </div>

          <div className="border cursor-pointer p-2 mb-3">
            <h4>Post title number 1</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              tempora minus molestias expedita vitae recusandae cum, ad beatae
              quis delectus!
            </p>
          </div>

          <div className="border cursor-pointer p-2 mb-3">
            <h4>Post title number 1</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              tempora minus molestias expedita vitae recusandae cum, ad beatae
              quis delectus!
            </p>
          </div>

          <div className="border cursor-pointer p-2 mb-3">
            <h4>Post title number 1</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              tempora minus molestias expedita vitae recusandae cum, ad beatae
              quis delectus!
            </p>
          </div>

          <div className="border cursor-pointer p-2 mb-3">
            <h4>Post title number 1</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              tempora minus molestias expedita vitae recusandae cum, ad beatae
              quis delectus!
            </p>
          </div>
        </Col>

        {/* Sidebar  */}
        {/* <Col className="dev" md="4">
          <h2>Sidebar</h2>
        </Col> */}
      </Row>
    </Container>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {},
//   };
// }
