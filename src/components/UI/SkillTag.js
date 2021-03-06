import { FiExternalLink } from "react-icons/fi";
import {
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
    <Link
      href={url}
      _hover={{
        textDecor: "none",
      }}
      cursor={isLink ? "pointer" : "default"}
      isExternal={isLink ? true : false}
      borderRadius="full"
      as={!isLink && "div"}
      shadow="3px 3px 0.4rem #101010"
    >
      <Tag
        size={size ?? "md"}
        colorScheme={color}
        _hover={{ bg: isLink && `${color}.200` }}
        borderRadius="full"
      >
        {icon && <TagLeftIcon boxSize="11px" as={icon} />}
        <TagLabel>{name}</TagLabel>
        {isLink && <TagRightIcon boxSize="11px" as={FiExternalLink} />}
      </Tag>
    </Link>
  );
}
