import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import SkillTag from "../UI/SkillTag";
import parse from "html-react-parser";

export default function Project({
  project,
  project: { title, url, imageUrl, hours, timeframe, description, skills },
}) {
  return (
    <HStack spacing="1rem">
      {imageUrl && (
        <Container w="28%" bg="gray.700" centerContent>
          <Image
            htmlWidth="100%"
            htmlHeight="auto"
            src={imageUrl}
            alt={title}
          />
        </Container>
      )}
      <VStack
        align="flex-start"
        spacing="0.7rem"
        w={!imageUrl ? "100%" : "72%"}
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
        <Text padding="0.5rem" borderRadius="md" bg="gray.700">
          {parse(description)}
        </Text>
        <HStack>
          {skills.map((s) => {
            if (s.url) return <SkillTag name={s.name} url={s.url} />;
            else return <Tag borderRadius="full">{s.name}</Tag>;
          })}
        </HStack>
      </VStack>
    </HStack>
  );
}
