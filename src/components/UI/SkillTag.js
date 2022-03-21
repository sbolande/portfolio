import { Tag, Link, TagLabel } from "@chakra-ui/react";

export default function SkillTag({ url, name, iconUrl, colorScheme, size }) {
  const color = colorScheme ?? "blue";

  return (
    <Tag
      size={size ?? "md"}
      colorScheme={color}
      _hover={{ bg: `${color}.200` }}
      borderRadius="full"
    >
      <Link
        href={url}
        _hover={{
          textDecor: "none",
        }}
        isExternal={url ? true : false}
      >
        <TagLabel>{name}</TagLabel>
      </Link>
    </Tag>
  );
}
