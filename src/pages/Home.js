import { Heading, Image, VStack } from "@chakra-ui/react";
import ConsoleText from "../components/Home/ConsoleText";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle();

  return (
    <VStack spacing="2rem">
      <Heading as="h1" size="2xl" w="100%" textAlign="center" cursor="default">
        <ConsoleText color="cyan.500" cursorColor="cyan.700">
          Seth Bolander
        </ConsoleText>
      </Heading>
      <Image
        borderRadius="full"
        boxSize="360px"
        src="https://avatars.githubusercontent.com/u/44790090?s=460&u=c974f13558dc3c245d5741b54274b2c74cb322a6&v=4"
        alt="@sbolande"
        border="3px solid"
        borderColor="cyan.600"
      />
    </VStack>
  );
}
