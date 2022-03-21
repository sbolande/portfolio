import { Container, Heading, Box } from "@chakra-ui/react";

export default function Section(props) {
  return (
    <Container maxW="container.lg" padding="0 4rem">
      <Heading
        as="h2"
        size="lg"
        cursor="default"
        color="cyan.500"
        marginBottom="0.5rem"
      >
        {props.header}
      </Heading>
      <Box>{props.children}</Box>
    </Container>
  );
}
