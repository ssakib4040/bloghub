import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";

export default function Id() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState<any>({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.post(`/api/posts/post`, {
        id,
      });

      setLoading(false);
      setValue(data);
    }

    fetchData();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <Container>
      <Row>
        {value && (
          <>
            <h2>{value?.title}</h2>
            <p>{value?.content}</p>
          </>
        )}
      </Row>
    </Container>
  );
}
