import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

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
          {description}
        </Text>
        <HStack>
          {skills.map((s) => {
            if (s.url)
              return (
                <Badge>
                  <Link href={s.url} isExternal>
                    {s.name}
                  </Link>
                </Badge>
              );
            else return <Badge>{s.name}</Badge>;
          })}
        </HStack>
      </VStack>
    </HStack>
  );
}
