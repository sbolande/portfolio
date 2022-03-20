import { StackDivider, VStack } from "@chakra-ui/react";
import Project from "./Project";

export default function ProjectList({ projects }) {
  return (
    <VStack
      spacing="1rem"
      divider={<StackDivider borderColor="white" />}
      w="75%"
    >
      {projects.map((p) => (
        <Project project={p} />
      ))}
    </VStack>
  );
}
