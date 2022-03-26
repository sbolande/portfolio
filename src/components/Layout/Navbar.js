import NavLink from "../UI/NavLink";
import { HStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation().pathname;

  return (
    <HStack
      justify="center"
      spacing="3rem"
      bg="gray.700"
      fontSize="1.15rem"
      marginBottom="1rem"
      boxShadow="0 0.2rem 1rem #171923"
    >
      <NavLink name="Home" to="/" isActive={location === "/"} />
      <NavLink
        name="Projects"
        to="/projects"
        isActive={location === "/projects"}
      />
      <NavLink
        name="Contact Me"
        to="/contact"
        isActive={location === "/contact"}
      />
    </HStack>
  );
}
