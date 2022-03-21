import { Link as RouteLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export default function NavLink(props) {
  return (
    <Link
      as={RouteLink}
      color="cyan.300"
      _hover={{ textDecor: "none", color: "cyan.400" }}
      to={props.to}
      isExternal={props.isExternal}
    >
      {props.children}
    </Link>
  );
}
