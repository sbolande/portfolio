import { Link as RouteLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export default function NavLink(props) {
  return (
    <Link color="cyan.300" _hover={{ textDecor: "none", color: "cyan.400" }}>
      <RouteLink to={props.to}>{props.children}</RouteLink>
    </Link>
  );
}
