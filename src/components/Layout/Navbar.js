import NavLink from "../UI/NavLink";
import { HStack } from "@chakra-ui/react";

export default function Navbar({ active }) {
  return (
    <HStack
      justify="center"
      spacing="2rem"
      bg="gray.700"
      padding="0.35rem 0"
      fontSize="1.15rem"
      marginBottom="1rem"
      boxShadow="0 0.2rem 1rem #171923"
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </HStack>
  );
}
