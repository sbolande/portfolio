import NavLink from "../UI/NavLink";
import { HStack } from "@chakra-ui/react";
import { RiHome2Line, RiFileTextLine } from "react-icons/ri";
import { BiPaperPlane } from "react-icons/bi";

import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation().pathname;

  return (
    <HStack
      justify="center"
      spacing="2.5rem"
      bg="gray.700"
      fontSize="1.15rem"
      marginBottom="1rem"
      boxShadow="0 0.2rem 1rem #171923"
    >
      <NavLink
        name="Home"
        to="/"
        icon={<RiHome2Line />}
        isActive={location === "/"}
      />
      <NavLink
        name="Projects"
        to="/projects"
        icon={<RiFileTextLine />}
        isActive={location === "/projects"}
      />
      <NavLink
        name="Contact Me"
        to="/contact"
        icon={<BiPaperPlane />}
        isActive={location === "/contact"}
      />
    </HStack>
  );
}
