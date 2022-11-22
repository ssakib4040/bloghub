import { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home(props: any) {
  const [data, setData] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/posts/posts");
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <Container className="pt-3">
      <Row className="">
        {/* Posts  */}

        {data.map((post: any) => {
          return (
            <div
              key={post._id}
              className="border cursor-pointer p-2 mb-3"
              onClick={() => {
                router.push("/posts/123");
              }}
            >
              <h4>{post.title}</h4>
              <p className="mb-0">{post.content}</p>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

import axios from "axios";

// export async function getStaticProps() {
//   const { data } = await axios.get(
//     `${process.env.WEBSITE_URI}/api/posts/posts`
//   );

//   return {
//     props: {
//       data,
//     },
//   };
// }
