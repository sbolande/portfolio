import { Box, HStack, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { DiCodepen } from "react-icons/di";
import { AiFillGoogleSquare } from "react-icons/ai";

import NavLink from "../UI/NavLink";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <Box h="4rem" />
      <HStack
        justify="center"
        spacing="2rem"
        bg="gray.700"
        padding="0.35rem 0"
        fontSize="1.15rem"
        marginTop="3rem"
        boxShadow="0 -0.2rem 1rem #171923"
        position="absolute"
        bottom="0px"
        w="100%"
      >
        <NavLink
          to="https://www.linkedin.com/in/seth-bolander-07577a179/"
          isExternal
        >
          <HStack spacing="3px">
            <BsLinkedin />
            <Text>LinkedIn</Text>
          </HStack>
        </NavLink>
        <NavLink to="https://github.com/sbolande" isExternal>
          <HStack spacing="3px">
            <BsGithub />
            <Text>GitHub</Text>
          </HStack>
        </NavLink>
        <NavLink to="mailto:sbolande97@gmail.com" isExternal>
          <HStack spacing="3px">
            <AiFillGoogleSquare />
            <Text>Gmail</Text>
          </HStack>
        </NavLink>
        <NavLink to="https://codepen.io/sbolande" isExternal>
          <HStack spacing="2px">
            <DiCodepen />
            <Text>CodePen</Text>
          </HStack>
        </NavLink>
      </HStack>
    </Fragment>
  );
}
