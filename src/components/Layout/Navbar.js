import { HStack, Link } from "@chakra-ui/react";

export default function Navbar({ title }) {
  return (
    <HStack>
      <Link as="button">Home</Link>
    </HStack>
  );
}
