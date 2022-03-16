import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";

export default function Project({
  project,
  project: { title, url, imageUrl, hours, timeframe, description, skills },
}) {
  return (
    <Flex>
      {imageUrl && <Image src={imageUrl} alt={title} />}
      <VStack>
        <Box>
          <Heading as="h2" size="lg">
            <Link href={url} isExternal>
              {title}
            </Link>
          </Heading>
          <p>
            {hours ? `${hours} hours, ` : ""}
            {timeframe}
          </p>
        </Box>
        <p>{description}</p>
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
    </Flex>
  );
}
