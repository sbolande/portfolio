import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Tag,
  Link,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
} from "@chakra-ui/react";

export default function SkillTag({ name, url, icon, colorScheme, size }) {
  const color = colorScheme ?? "blue";
  const isLink = url ? true : false;

  return (
    <Box borderRadius="full" shadow="3px 3px 0.4rem #101010">
      <Link
        href={url}
        _hover={{
          textDecor: "none",
        }}
        cursor={isLink ? "pointer" : "default"}
        isExternal={url ? true : false}
        borderRadius="full"
        as={!isLink && "div"}
      >
        <Tag
          size={size ?? "md"}
          colorScheme={color}
          _hover={{ bg: isLink && `${color}.200` }}
          borderRadius="full"
        >
          {icon && <TagLeftIcon boxSize="11px" as={icon} />}
          <TagLabel>{name}</TagLabel>
          {isLink && <TagRightIcon boxSize="11px" as={ExternalLinkIcon} />}
        </Tag>
      </Link>
    </Box>
  );
}
