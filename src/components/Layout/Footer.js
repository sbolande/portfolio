import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { DiCodepen } from "react-icons/di";
import { AiFillGoogleSquare } from "react-icons/ai";

import NavLink from "../UI/NavLink";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <Box h="4.5rem" />
      <VStack
        justify="center"
        boxShadow="0 -0.2rem 1rem #171923"
        marginTop="3rem"
        padding="0.35rem 0"
        fontSize="1.15rem"
        position="absolute"
        bottom="0px"
        bg="gray.700"
        w="100%"
        spacing="0"
      >
        <Text fontSize="smaller">© Seth Bolander 2022</Text>
        <HStack spacing="2rem">
          <NavLink
            name="LinkedIn"
            to="https://www.linkedin.com/in/seth-bolander-07577a179/"
            icon={<BsLinkedin />}
            isExternal
          />
          <NavLink
            name="GitHub"
            to="https://github.com/sbolande"
            icon={<BsGithub />}
            isExternal
          />
          <NavLink name="Gmail" to="/contact" icon={<AiFillGoogleSquare />} />
          <NavLink
            name="CodePen"
            to="https://codepen.io/sbolande"
            icon={<DiCodepen />}
            isExternal
          />
        </HStack>
      </VStack>
    </Fragment>
  );
}
