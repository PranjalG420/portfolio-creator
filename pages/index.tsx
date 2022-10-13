import { useInView } from "react-intersection-observer";
import Container from "../components/container";

export default function Home() {
  const { inView, ref } = useInView();
  return (
    <>
      <Container top="flex-0">
        <h1 className="text-4xl font-bold min-h-screen">Hello World</h1>
      </Container>
    </>
  );
}
