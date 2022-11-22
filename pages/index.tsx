import { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import { useRouter } from "next/router";

import Loader from "../components/Loader";

export default function Home(props: any) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/posts/posts");
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

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
                router.push(`/posts/${post._id}`);
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
