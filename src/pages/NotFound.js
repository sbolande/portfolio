import NavLink from "../components/UI/NavLink";
import { Heading, Container } from "@chakra-ui/react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("404");

  return (
    <Container fontSize="2xl" centerContent>
      <Heading size="3xl" as="h1" padding="1rem">
        404 - Not Found!
      </Heading>
      <NavLink to="/">Go to Home</NavLink>
    </Container>
  );
}
