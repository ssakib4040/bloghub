import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Container className="pt-3">
      <Row className="">
        {/* Posts  */}
        <div
          className="border cursor-pointer p-2 mb-3"
          onClick={() => {
            router.push("/posts/123");
          }}
        >
          <h4>Post title number 1</h4>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tempora minus molestias expedita vitae recusandae cum, ad beatae
            quis delectus!
          </p>
        </div>
      </Row>
    </Container>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {},
//   };
// }
