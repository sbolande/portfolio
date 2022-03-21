import NavLink from "../UI/NavLink";
import { HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <HStack
      justify="center"
      spacing="2rem"
      bg="gray.700"
      padding="0.35rem 0"
      fontSize="1.15rem"
      marginTop="2rem"
      boxShadow="0 -0.2rem 1rem #171923"
    >
      <NavLink
        to="https://www.linkedin.com/in/seth-bolander-07577a179/"
        isExternal
      >
        LinkedIn
      </NavLink>
      <NavLink to="https://github.com/sbolande" isExternal>
        GitHub
      </NavLink>
      <NavLink to="mailto:sbolande97@gmail.com" isExternal>
        Gmail
      </NavLink>
      <NavLink to="https://codepen.io/sbolande" isExternal>
        CodePen
      </NavLink>
    </HStack>
  );
}
