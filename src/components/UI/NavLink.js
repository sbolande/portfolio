import { Link as RouteLink } from "react-router-dom";
import { HStack, Link, Text, theme } from "@chakra-ui/react";

export default function NavLink({ name, to, icon, isExternal, isActive }) {
  return (
    <Link
      as={!isExternal && RouteLink}
      color="cyan.300"
      _hover={{ textDecor: "none", color: "cyan.400" }}
      _focus={{
        boxShadow: "none",
      }}
      to={to}
      href={isExternal && to}
      isExternal={isExternal}
      padding="0.25rem 0"
      borderBottom={isActive && `3px solid ${theme.colors.cyan["300"]}`}
    >
      <HStack spacing="3px">
        {icon}
        <Text>{name}</Text>
      </HStack>
    </Link>
  );
}
