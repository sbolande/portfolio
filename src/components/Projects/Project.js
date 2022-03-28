import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import SkillTag from "../UI/SkillTag";
import parse from "html-react-parser";

export default function Project({
  project,
  project: { title, url, imageUrl, hours, timeframe, description, skills, key },
}) {
  const [isSmallScreen] = useMediaQuery("(max-width: 830px)");
  const hasImage = imageUrl !== null ? true : false;

  return (
    <HStack spacing="1rem" align="center">
      <VStack
        align="flex-start"
        spacing="0.7rem"
        w={!isSmallScreen ? "72%" : "100%"}
      >
        <Box textAlign="left">
          <Heading as="h2" size="lg" textAlign="left">
            {!url ? (
              title
            ) : (
              <Link href={url} isExternal color="cyan.300">
                {title}
              </Link>
            )}
          </Heading>
          <p>
            {hours ? `${hours} hours, ` : ""}
            {timeframe}
          </p>
        </Box>
        <Box padding="0.5rem" borderRadius="md" bg="gray.700" w="100%">
          {parse(description)}
        </Box>
        <Wrap>
          {skills.map((s, i) => {
            if (s.url) {
              return (
                <SkillTag
                  key={`${key}_skilltag_${i}`}
                  name={s.name}
                  url={s.url}
                />
              );
            } else {
              return (
                <SkillTag
                  key={`${key}_skilltag_${i}`}
                  name={s.name}
                  colorScheme="gray"
                />
              );
            }
          })}
        </Wrap>
      </VStack>
      {!isSmallScreen && (
        <Container
          w="28%"
          maxH="200px"
          bg={hasImage && "gray.700"}
          centerContent
        >
          {hasImage && (
            <Image maxH="200px" fit="contain" src={imageUrl} alt={title} />
          )}
        </Container>
      )}
    </HStack>
  );
}
